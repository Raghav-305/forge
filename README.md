# Forge — Config-Driven App Engine

Forge is a **runtime renderer**: instead of hardcoding pages, it reads a JSON
**AppConfig** describing pages and components, and dynamically renders the UI
through a **Component Registry**. New apps are added by uploading a config —
not by writing React.

> Tech: **TanStack Start (React 19 + Vite 7)**, **TypeScript (strict)**,
> **Tailwind CSS v4**, **Shadcn UI**, file-based routing.

---

## Table of Contents

1. [Features](#features)
2. [Full File Structure](#full-file-structure)
3. [Core Architecture](#core-architecture)
4. [Config Schema (AppConfig)](#config-schema-appconfig)
5. [Pages](#pages)
6. [Backend Integration Guide](#backend-integration-guide)
7. [Adding a New Component Type](#adding-a-new-component-type)
8. [Design System](#design-system)
9. [Local Development](#local-development)

---

## Features

- **Dashboard** — list of registered apps + System Health diagnostics.
- **Dynamic App Viewer** (`/app/$id`) — renders any app from its JSON config.
- **Upload Config** — drop a JSON file, get diagnostics, activate.
- **CSV Import** — smart field-mapping with target-field suggestions.
- **Event Logs** — filterable observability table.
- **Component Registry** — pluggable renderer map (`table`, `form`, `cards`, …).
- **Error Boundary** — wraps every dynamic component so one bad config can't
  crash the page.
- **`useEngineData` hook family** — single data-fetching surface (apps, app,
  rows, health, logs).

---

## Full File Structure

```
.
├── README.md
├── package.json
├── vite.config.ts              # TanStack Start + Vite plugin config
├── wrangler.jsonc              # Cloudflare Worker target
├── tsconfig.json
├── components.json             # Shadcn config
├── eslint.config.js
├── bunfig.toml
└── src/
    ├── router.tsx              # Router instance
    ├── routeTree.gen.ts        # AUTO-GENERATED — do not edit
    ├── styles.css              # Tailwind v4 + design tokens (oklch)
    │
    ├── routes/                 # File-based routes
    │   ├── __root.tsx          # Root shell: <html>, sidebar, header, Outlet
    │   ├── index.tsx           # Dashboard (/)
    │   ├── app.$id.tsx         # Dynamic App Viewer (/app/:id)
    │   ├── upload.tsx          # Upload Config (/upload)
    │   ├── csv-import.tsx      # CSV Import (/csv-import)
    │   └── logs.tsx            # Event Logs (/logs)
    │
    ├── components/
    │   ├── app-sidebar.tsx     # Left nav
    │   ├── error-boundary.tsx  # Wraps every dynamic component
    │   ├── states.tsx          # Loading / Empty / Error states
    │   ├── dynamic/
    │   │   ├── registry.tsx    # type → renderer map  (CORE)
    │   │   ├── dynamic-table.tsx
    │   │   ├── dynamic-form.tsx
    │   │   └── dynamic-cards.tsx
    │   └── ui/                 # Shadcn primitives (button, card, table, …)
    │
    ├── hooks/
    │   ├── use-engine-data.ts  # useEngineApps / useEngineApp / useEngineData
    │   │                       # / useEngineHealth / useEngineLogs
    │   └── use-mobile.tsx
    │
    └── lib/
        ├── types.ts            # AppConfig, PageConfig, ComponentConfig, …
        ├── mock-store.ts       # In-memory mock data (replace with backend)
        └── utils.ts            # cn() helper
```

---

## Core Architecture

```
   ┌──────────────────────┐         ┌─────────────────────────┐
   │  Backend (your API)  │  JSON   │    useEngineData hooks  │
   │  - apps              │ ──────► │  (single fetch surface) │
   │  - data rows         │         └────────────┬────────────┘
   │  - health / logs     │                      │
   └──────────────────────┘                      ▼
                                    ┌─────────────────────────┐
                                    │  Route Components       │
                                    │  (index, app.$id, …)    │
                                    └────────────┬────────────┘
                                                 │ ComponentConfig[]
                                                 ▼
                                    ┌─────────────────────────┐
                                    │  RenderComponent        │
                                    │  → registry[type]       │
                                    │  → ErrorBoundary        │
                                    └────────────┬────────────┘
                                                 ▼
                              DynamicTable / DynamicForm / DynamicCards / …
```

## Backend Integration Guide

1. Create a frontend `.env` at the repo root with:
   ```
   VITE_API_BASE_URL=http://localhost:3001
   ```
2. Start the backend from the `backend/` folder and ensure it listens on `3001`.
3. The frontend uses `src/hooks/use-engine-data.ts` to fetch:
   - `/api/configs`
   - `/api/configs/:slug`
   - `/api/engine`
   - `/api/events`
   - `/health`
4. Navigate to `/app/:id` to set the active `configSlug` in local storage.

## Local Development

- Run backend in one terminal: `cd backend && npm run dev`
- Run frontend in another terminal: `npm install && npm run dev`
- The frontend will use `VITE_API_BASE_URL` from `.env` by default.

**Key invariants**

- The UI never hardcodes a schema. Every page is driven by `ComponentConfig[]`.
- Unknown `type` → a graceful Fallback ("Unknown component type"), never a crash.
- All data goes through `useEngineData*` hooks — swap one file to switch backends.

---

## Config Schema (AppConfig)

Defined in `src/lib/types.ts`.

```ts
interface AppConfig {
  id: string;
  name: string;
  description?: string;
  version?: string;
  pages: PageConfig[];
}

interface PageConfig {
  id: string;
  title: string;
  components: ComponentConfig[];
}

interface ComponentConfig {
  id: string;
  type: "table" | "form" | "cards" | string; // extensible
  title?: string;
  description?: string;
  dataSource?: string;                       // key the backend resolves
  fields?:  { key; label; type?; options?; required? }[];
  columns?: { key; label }[];
  cards?:   { label; value; delta? }[];
}
```

### Example

```json
{
  "id": "crm",
  "name": "Customer CRM",
  "version": "1.2.0",
  "pages": [{
    "id": "overview",
    "title": "Overview",
    "components": [
      { "id": "stats", "type": "cards", "title": "Key Metrics",
        "cards": [{ "label": "Customers", "value": 1284, "delta": "+12%" }] },
      { "id": "list", "type": "table", "title": "Customers",
        "dataSource": "customers",
        "columns": [{ "key": "name", "label": "Name" },
                    { "key": "email", "label": "Email" }] },
      { "id": "add", "type": "form", "title": "Add Customer",
        "fields": [{ "key": "name", "label": "Name", "type": "text", "required": true }] }
    ]
  }]
}
```

---

## Pages

| Route          | File                  | Purpose                                  |
| -------------- | --------------------- | ---------------------------------------- |
| `/`            | `routes/index.tsx`    | Dashboard — apps grid + System Health    |
| `/app/$id`     | `routes/app.$id.tsx`  | Renders an app from its config           |
| `/upload`      | `routes/upload.tsx`   | Upload + validate JSON config            |
| `/csv-import`  | `routes/csv-import.tsx` | CSV → field-mapping → preview → import |
| `/logs`        | `routes/logs.tsx`     | Filterable event log table               |

---

## Backend Integration Guide

The entire app reads through **`src/hooks/use-engine-data.ts`**. Today it
returns mock data from `src/lib/mock-store.ts`. To wire a real backend, replace
the body of those hooks — no component needs to change.

### Expected Endpoints

| Hook                | Suggested endpoint              | Returns                |
| ------------------- | ------------------------------- | ---------------------- |
| `useEngineApps()`   | `GET  /api/apps`                | `AppConfig[]`          |
| `useEngineApp(id)`  | `GET  /api/apps/:id`            | `AppConfig \| null`    |
| `useEngineData(s)`  | `GET  /api/data/:source`        | `Record<string, unknown>[]` |
| `useEngineHealth()` | `GET  /api/health`              | `Diagnostic[]`         |
| `useEngineLogs()`   | `GET  /api/logs`                | `EventLog[]`           |
| Upload config       | `POST /api/apps` (body=AppConfig)| `{ id, diagnostics }` |
| CSV import          | `POST /api/data/:source/import` | `{ imported: number }` |

### Option A — Plain `fetch` (any backend: Node, Django, Rails, FastAPI…)

Replace `src/hooks/use-engine-data.ts`:

```ts
import { useEffect, useState } from "react";
import type { AppConfig, Diagnostic, EventLog } from "@/lib/types";

const API = import.meta.env.VITE_API_URL ?? "/api";

function useFetch<T>(url: string | null) {
  const [s, set] = useState<{ data: T | null; loading: boolean; error: Error | null }>({
    data: null, loading: true, error: null,
  });
  useEffect(() => {
    if (!url) { set({ data: null, loading: false, error: null }); return; }
    let cancel = false;
    set({ data: null, loading: true, error: null });
    fetch(url, { credentials: "include" })
      .then(r => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
      .then(d => !cancel && set({ data: d, loading: false, error: null }))
      .catch(e => !cancel && set({ data: null, loading: false, error: e }));
    return () => { cancel = true; };
  }, [url]);
  return s;
}

export const useEngineApps   = ()        => useFetch<AppConfig[]>(`${API}/apps`);
export const useEngineApp    = (id: string) => useFetch<AppConfig | null>(`${API}/apps/${id}`);
export const useEngineData   = (src?: string) => useFetch<Record<string, unknown>[]>(src ? `${API}/data/${src}` : null);
export const useEngineHealth = ()        => useFetch<Diagnostic[]>(`${API}/health`);
export const useEngineLogs   = ()        => useFetch<EventLog[]>(`${API}/logs`);
```

Then in `.env`:
```
VITE_API_URL=https://api.yourdomain.com
```

### Option B — TanStack Start server functions (same repo backend)

Create `src/server/apps.functions.ts`:

```ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getApps = createServerFn({ method: "GET" }).handler(async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/apps`, {
    headers: { Authorization: `Bearer ${process.env.BACKEND_TOKEN}` },
  });
  return res.json();
});

export const getApp = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ id: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const res = await fetch(`${process.env.BACKEND_URL}/apps/${data.id}`);
    return res.json();
  });
```

Then in the hook:
```ts
import { useQuery } from "@tanstack/react-query";
import { getApps } from "@/server/apps.functions";

export const useEngineApps = () =>
  useQuery({ queryKey: ["apps"], queryFn: () => getApps() });
```

### Option C — Lovable Cloud (Supabase)

1. Enable Lovable Cloud (database + auth + storage + edge functions, no setup).
2. Create tables: `apps (id, config jsonb)`, `events`, `diagnostics`.
3. Replace hooks with `supabase.from('apps').select('*')`.

### CORS / Auth

- Same-origin (Option B): no CORS needed.
- Cross-origin (Option A): backend must send
  `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials: true`
  if you use cookies. For bearer tokens add an `Authorization` header in the
  fetch wrapper.

### Webhooks / Public APIs

Add server routes under `src/routes/api/public/*` — these bypass auth on the
published site. **Always verify HMAC signatures** before processing.

---

## Adding a New Component Type

1. Create `src/components/dynamic/dynamic-chart.tsx`:
   ```tsx
   import type { ComponentConfig } from "@/lib/types";
   export function DynamicChart({ config }: { config: ComponentConfig }) {
     return <div>{config.title}</div>;
   }
   ```
2. Register it in `src/components/dynamic/registry.tsx`:
   ```ts
   import { DynamicChart } from "./dynamic-chart";
   const registry = { table: …, form: …, cards: …, chart: DynamicChart };
   ```
3. Use it from any config: `{ "type": "chart", "id": "x", … }`.

No routing, no layout, no other files change.

---

## Design System

- Theme tokens in `src/styles.css` (oklch). Black + electric blue.
- Glassmorphism via `.glass-panel`, animated `.glow-border`, `.text-gradient`.
- Use semantic tokens (`bg-primary`, `text-muted-foreground`) — **never** raw
  Tailwind colors like `bg-blue-500`.
- All variants live with the component (Shadcn `cva` pattern).

---

## Local Development

```bash
bun install
bun dev          # http://localhost:8080
```

- Routes auto-register from `src/routes/` (Vite plugin writes `routeTree.gen.ts`).
- TypeScript is `strict: true` — every import must resolve.
- Build target: Cloudflare Worker (`wrangler.jsonc`).

---

Built as a runtime engine — your backend ships configs, Forge renders them.
#   f o r g e  
 