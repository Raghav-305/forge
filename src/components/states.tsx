import { Loader2 } from "lucide-react";

export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/30 p-6 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin text-primary" />
      {label}
    </div>
  );
}

export function EmptyState({ label = "No data available" }: { label?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border/60 bg-muted/10 p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
