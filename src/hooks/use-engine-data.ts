import { useEffect, useState } from "react";
import { startTransition } from "react";
import { API_BASE_URL, apiGet, apiPost } from "@/lib/api";
import { mockApps, mockHealth, mockLogs } from "@/lib/mock-store";
import type { AppConfig, Diagnostic, EventLog } from "@/lib/types";

interface State<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const CACHE_TTL_MS = 30_000;
const USE_MOCK_FALLBACK = import.meta.env.VITE_USE_MOCKS === "true";
let appsCache: { data: AppConfig[]; expiresAt: number } | null = null;
let appsPromise: Promise<AppConfig[]> | null = null;
let healthCache: { data: Diagnostic[]; expiresAt: number } | null = null;
let healthPromise: Promise<Diagnostic[]> | null = null;

function useAsyncFetch<T>(producer: () => Promise<T>, deps: unknown[] = [], fallback: T): State<T> {
  const [state, setState] = useState<State<T>>({ data: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    producer()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ data: USE_MOCK_FALLBACK ? fallback : null, loading: false, error: error as Error });
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}

function normalizeField(field: any, fallbackKey: string) {
  const key = String(field?.key ?? field?.name ?? field?.id ?? fallbackKey);

  return {
    ...field,
    key,
    label: field?.label ?? key,
    type: field?.type ?? "text",
    options: Array.isArray(field?.options)
      ? field.options.map((option: any) => typeof option === "string" ? option : option.label ?? option.value)
      : undefined
  };
}

function normalizeComponent(component: any, fallbackId: string) {
  try {
    console.log('[normalizeComponent] Input:', component?.type, 'id:', component?.id);
    
    const props = component?.props && typeof component.props === "object" ? component.props : {};
    const merged = {
      ...component,
      ...props
    };

    const id = String(merged?.id ?? merged?.key ?? merged?.title ?? fallbackId);
    console.log('[normalizeComponent] Merged component type:', merged?.type, 'id:', id);

    const result = {
      ...merged,
      id,
      type: merged?.type ?? "table",
    fields: Array.isArray(merged?.fields)
      ? merged.fields.map((field: any, i: number) => normalizeField(field, `${id}:field:${i}`))
      : undefined,
    columns: Array.isArray(merged?.columns) ? merged.columns : undefined,
    cards: Array.isArray(merged?.cards) ? merged.cards : undefined
  };
}

function normalizePage(page: any, fallbackId: string) {
  try {
    console.log('[normalizePage] Input page:', page, 'fallbackId:', fallbackId);
    
    const components = Array.isArray(page?.components) ? page.components : [];
    console.log('[normalizePage] Found', components.length, 'components');
    
    const inferredDataSource = components.find((component: any) => component?.dataSource || component?.entity)?.dataSource
      ?? components.find((component: any) => component?.dataSource || component?.entity)?.entity;

    const pageId = String(page?.id ?? page?.slug ?? page?.title ?? fallbackId);
    console.log('[normalizePage] Page ID:', pageId);

    const normalizedComponents = components.map((component: any, i: number) => {
      try {
        console.log(`[normalizePage] Normalizing component ${i}:`, component.type);
        return normalizeComponent(
          {
            ...component,
            dataSource: component?.dataSource ?? component?.entity ?? (component?.type === "form" ? inferredDataSource : undefined)
          },
          `${pageId}:component:${i}`
        );
      } catch (err) {
        console.error(`[normalizePage] Error normalizing component ${i}:`, err);
        throw err;
      }
    });

    const result = {
      ...page,
      id: pageId,
      title: page?.title ?? page?.name ?? "Untitled Page",
      components: normalizedComponents
    };
    
    console.log('[normalizePage] Output page:', result);
    return result;
  } catch (err) {
    console.error('[normalizePage] Error:', err);
    throw err;
  }
}

function normalizeAppConfig(raw: any): AppConfig {
  try {
    console.log('[normalizeAppConfig] Input:', raw);
    
    // Validate raw is an object
    if (!raw || typeof raw !== 'object') {
      console.error('[normalizeAppConfig] Invalid raw input, not an object:', typeof raw);
      throw new Error('Expected config object from backend');
    }

    // Backend stores config JSON under AppConfig.config (Prisma Json).
    // Some endpoints or older versions may wrap the actual JSON as config.config.
    const configContainer = raw?.config && typeof raw.config === "object" ? raw.config : {};
    const config =
      (configContainer as any)?.config && typeof (configContainer as any).config === "object"
        ? (configContainer as any).config
        : configContainer;

    const pagesFromUiObject =
      config?.ui?.pages && typeof config.ui.pages === "object"
        ? Object.values(config.ui.pages)
        : [];

    let pages = Array.isArray(raw?.pages)
      ? raw.pages
      : Array.isArray(config?.pages)
        ? config.pages
        : Array.isArray(pagesFromUiObject)
          ? pagesFromUiObject
          : [];

    if (!Array.isArray(pages)) {
      console.warn('[normalizeAppConfig] Pages is not an array:', pages);
      pages = [];
    }

    const normalized = {
      ...config,
      ...raw,
      slug: raw?.slug ?? config?.slug,
      name: raw?.name ?? config?.name ?? "Untitled App",
      description: raw?.description ?? config?.description,
      version: raw?.version ?? config?.version,
      pages: pages.map((page: any, i: number) => {
        try {
          return normalizePage(page, `${raw?.slug ?? raw?.id ?? config?.slug ?? "app"}:page:${i}`);
        } catch (pageError) {
          console.error('[normalizeAppConfig] Error normalizing page', i, ':', pageError);
          throw pageError;
        }
      })
    };
    
    console.log('[normalizeAppConfig] Output:', normalized);
    return normalized;
  } catch (error) {
    console.error('[normalizeAppConfig] Error normalizing config:', error);
    throw error;
  }
}

export function useEngineApps() {
  return useAsyncFetch<AppConfig[]>(
    async () => {
      const now = Date.now();
      if (appsCache && appsCache.expiresAt > now) {
        return appsCache.data;
      }
      if (appsPromise) {
        return appsPromise;
      }

      appsPromise = (async () => {
        try {
          const response = await apiGet<{ data?: any[]; pagination?: any } | any[]>("/api/configs");
          const apps = Array.isArray(response) ? response : response?.data ?? [];
          const data = apps.map(normalizeAppConfig);
          appsCache = { data, expiresAt: Date.now() + CACHE_TTL_MS };
          return data;
        } finally {
          appsPromise = null;
        }
      })();

      return appsPromise;
    },
    [],
    mockApps
  );
}

export function useEngineApp(id: string) {
  return useAsyncFetch<AppConfig | null>(
    async () => {
      try {
        console.log('[useEngineApp] Fetching config for id:', id);
        const config = await apiGet<any>(`/api/configs/${id}`);
        console.log('[useEngineApp] Raw config received:', config);
        const normalized = normalizeAppConfig(config);
        console.log('[useEngineApp] Normalized config:', normalized);
        return normalized;
      } catch (error) {
        console.error('[useEngineApp] Error loading config:', error);
        throw error;
      }
    },
    [id],
    mockApps.find((a) => a.id === id || a.slug === id) ?? null
  );
}

function normalizePayloadRow(row: any): Record<string, unknown> {
  if (row && typeof row === "object" && row.payload && typeof row.payload === "object") {
    return row.payload as Record<string, unknown>;
  }
  return row;
}

export function useEngineData(source?: string, configSlug?: string) {
  const [state, setState] = useState<State<Record<string, unknown>[]>>({ data: null, loading: true, error: null });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const refresh = (event: Event) => {
      const changedSource = (event as CustomEvent<{ source?: string }>).detail?.source;
      // Only refresh if explicitly targeted to this source, or explicitly global ("*").
      // Unscoped events are ignored to prevent fan-out refresh storms that can freeze the UI.
      if (!changedSource) return;
      if (changedSource === "*" || changedSource === source) {
        startTransition(() => {
          setRefreshKey((key) => key + 1);
        });
      }
    };

    window.addEventListener("engine-data-changed", refresh);
    return () => window.removeEventListener("engine-data-changed", refresh);
  }, [source]);

  useEffect(() => {
    let cancelled = false;
    if (!source || !configSlug) {
      setState({ data: [], loading: false, error: null });
      return;
    }

    setState({ data: null, loading: true, error: null });

    async function load() {
      const response = await apiPost<{ success: boolean; data: any }>("/api/engine", {
        configSlug,
        action: "list",
        entity: source,
        take: 50
      });
      return Array.isArray(response.data)
        ? response.data.map(normalizePayloadRow)
        : [];
    }

    load()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ data: [], loading: false, error: error as Error });
      });

    return () => {
      cancelled = true;
    };
  }, [source, configSlug, refreshKey]);

  return state;
}

export async function createEngineRecord(source: string, data: Record<string, unknown>, configSlug?: string) {
  if (!configSlug) {
    throw new Error("No active app selected");
  }

  const response = await apiPost<{ success: boolean; data: any }>("/api/engine", {
    configSlug,
    action: "create",
    entity: source,
    data
  });

  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent("engine-data-changed", { detail: { source } }));
  }, 0);
  return response.data;
}

export function useEngineHealth() {
  return useAsyncFetch<Diagnostic[]>(
    async () => {
      const now = Date.now();
      if (healthCache && healthCache.expiresAt > now) {
        return healthCache.data;
      }
      if (healthPromise) {
        return healthPromise;
      }

      healthPromise = (async () => {
        try {
          const health = await apiGet<{ status: string; services: Record<string, string> }>("/health");
          const data: Diagnostic[] = [
            {
              level: health.status === "healthy" ? "info" : "warning",
              message: `API status: ${health.status}`,
              path: "/health"
            },
            {
              level: health.services.database === "connected" ? "info" : "error",
              message: `Database: ${health.services.database}`,
              path: "database"
            },
            {
              level: "info",
              message: `Using backend at ${API_BASE_URL}`
            }
          ];
          healthCache = { data, expiresAt: Date.now() + CACHE_TTL_MS };
          return data;
        } finally {
          healthPromise = null;
        }
      })();

      return healthPromise;
    },
    [],
    mockHealth
  );
}

export function useEngineLogs() {
  return useAsyncFetch<EventLog[]>(
    async () => {
      const response = await apiGet<{ data: any[]; pagination: { total: number } }>("/api/events?limit=20");
      return Array.isArray(response.data)
        ? response.data.map((log) => ({
            id: log.id,
            timestamp: log.created_at || log.timestamp,
            type: log.data?.type ?? "info",
            app: log.config_slug ?? "unknown",
            message: log.data?.message ?? log.event_type ?? "Event recorded",
            status: log.severity === "error" ? "failed" : "success"
          }))
        : mockLogs;
    },
    [],
    mockLogs
  );
}
