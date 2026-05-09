import { createFileRoute, Link } from "@tanstack/react-router";
import { useEngineApps, useEngineHealth } from "@/hooks/use-engine-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoadingState, EmptyState } from "@/components/states";
import { Upload, Boxes, ArrowRight, ShieldCheck, AlertTriangle, Wrench, Info } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Dashboard — Forge" }] }),
  component: Dashboard,
});

const iconFor = {
  info: Info, warning: AlertTriangle, error: AlertTriangle, fix: Wrench,
} as const;

const colorFor = {
  info: "text-muted-foreground",
  warning: "text-warning",
  error: "text-destructive",
  fix: "text-primary",
} as const;

function Dashboard() {
  const { data: apps, loading, error: appsError } = useEngineApps();
  const { data: health, loading: hLoading, error: healthError } = useEngineHealth();

  return (
    <div className="grid-bg">
      <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">Control Plane</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">Apps Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your config-driven applications, inspect health, and import data.
            </p>
          </div>
          <Link to="/upload">
            <Button className="bg-gradient-to-r from-primary to-[oklch(0.55_0.22_268)] glow-border">
              <Upload className="mr-2 h-4 w-4" /> Upload Config
            </Button>
          </Link>
        </div>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Active Apps</h2>
            <Badge variant="outline" className="font-mono text-xs">{apps?.length ?? 0} running</Badge>
          </div>
          {loading ? <LoadingState /> : appsError ? (
            <Card className="glass-panel border-destructive/30 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" />
                <div>
                  <p className="text-sm font-medium">Backend unavailable</p>
                  <p className="mt-1 text-xs text-muted-foreground">{appsError.message}</p>
                </div>
              </div>
            </Card>
          ) : !apps || apps.length === 0 ? <EmptyState /> : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((a) => (
                <Link key={a.id} to="/app/$id" params={{ id: a.slug ?? a.id }}>
                  <Card className="glass-panel group relative h-full overflow-hidden p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-border">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-[oklch(0.55_0.22_268/0.2)] ring-1 ring-primary/30">
                        <Boxes className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="font-mono text-[10px]">v{a.version}</Badge>
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">{a.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{a.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{a.pages.length} page · {a.pages.reduce((n, p) => n + p.components.length, 0)} components</span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-success" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">System Health</h2>
          </div>
          <Card className="glass-panel divide-y divide-border/40">
            {hLoading ? (
              <div className="p-4"><LoadingState label="Running diagnostics…" /></div>
            ) : healthError ? (
              <div className="flex items-start gap-3 p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" />
                <div>
                  <p className="text-sm font-medium">Health check failed</p>
                  <p className="mt-1 text-xs text-muted-foreground">{healthError.message}</p>
                </div>
              </div>
            ) : (
              (health ?? []).map((d, i) => {
                const Icon = iconFor[d.level];
                return (
                  <div key={i} className="flex items-start gap-3 p-4">
                    <Icon className={`mt-0.5 h-4 w-4 ${colorFor[d.level]}`} />
                    <div className="flex-1">
                      <p className="text-sm">{d.message}</p>
                      {d.path && <code className="mt-1 block font-mono text-xs text-muted-foreground">{d.path}</code>}
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{d.level}</Badge>
                  </div>
                );
              })
            )}
          </Card>
        </section>
      </div>
    </div>
  );
}
