import type { ComponentType as ReactCT } from "react";
import type { ComponentConfig } from "@/lib/types";
import { DynamicTable } from "./dynamic-table";
import { DynamicForm } from "./dynamic-form";
import { DynamicCards } from "./dynamic-cards";
import { ErrorBoundary } from "@/components/error-boundary";
import { AlertTriangle } from "lucide-react";

type Renderer = ReactCT<{ config: ComponentConfig }>;
type RenderProps = { config: ComponentConfig; configSlug?: string };
type AppRenderer = ReactCT<RenderProps>;

const registry: Record<string, AppRenderer> = {
  table: DynamicTable,
  form: DynamicForm,
  cards: DynamicCards,
};

export function registerComponent(type: string, renderer: Renderer) {
  registry[type] = renderer as AppRenderer;
}

function Fallback({ type }: { type: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/5 p-4 text-sm">
      <AlertTriangle className="mt-0.5 h-4 w-4 text-warning" />
      <div>
        <p className="font-medium">Unknown component type: <code className="font-mono">{type}</code></p>
        <p className="text-xs text-muted-foreground">Register it via <code>registerComponent()</code> to render.</p>
      </div>
    </div>
  );
}

export function RenderComponent({ config, configSlug }: RenderProps) {
  try {
    console.log('[RenderComponent] Rendering component:', config?.type, 'id:', config?.id, 'title:', config?.title);
    
    if (!config) {
      console.error('[RenderComponent] No config provided');
      return <Fallback type="unknown" />;
    }
    
    const Comp = registry[config.type];
    console.log('[RenderComponent] Found renderer:', !!Comp, 'for type:', config.type);
    
    return (
      <ErrorBoundary label={config.title ?? config.type}>
        {Comp ? <Comp config={config} configSlug={configSlug} /> : <Fallback type={config.type} />}
      </ErrorBoundary>
    );
  } catch (err) {
    console.error('[RenderComponent] Error:', err);
    return <Fallback type={config?.type ?? 'unknown'} />;
  }
}
