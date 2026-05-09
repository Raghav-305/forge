import type { ComponentConfig } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/states";
import { TrendingUp } from "lucide-react";

export function DynamicCards({ config }: { config: ComponentConfig; configSlug?: string }) {
  console.log('[DynamicCards] START - id:', config.id);
  const cards = config.cards ?? [];
  console.log('[DynamicCards] Total cards:', cards.length);
  
  if (cards.length === 0) {
    return <EmptyState label="No cards configured" />;
  }
  
  return (
    <div>
      {config.title && (
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {config.title}
        </h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Card
            key={i}
            className="glass-panel relative overflow-hidden p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {c.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-gradient">
              {c.value}
            </p>
            {c.delta && (
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                <TrendingUp className="h-3 w-3" /> {c.delta}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
