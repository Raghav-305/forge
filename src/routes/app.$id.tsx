import { createFileRoute, Link } from "@tanstack/react-router";
import { CSSProperties, useEffect, useState } from "react";
import { useEngineApp } from "@/hooks/use-engine-data";
import { LoadingState } from "@/components/states";
import { RenderComponent } from "@/components/dynamic/registry";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiPost } from "@/lib/api";
import { toast } from "sonner";

export const Route = createFileRoute("/app/$id")({
  component: AppViewer,
});

function AppViewer() {
  const { id } = Route.useParams();
  const { data: app, loading, error } = useEngineApp(id);
  const pages = app?.pages ?? [];
  const [activePageId, setActivePageId] = useState<string | null>(null);

  useEffect(() => {
    const activeSlug = app?.slug ?? id;
    if (typeof window !== "undefined" && activeSlug) {
      window.localStorage.setItem("activeConfigSlug", activeSlug);
    }
  }, [app?.slug, id]);

  useEffect(() => {
    if (!pages.length) {
      setActivePageId(null);
      return;
    }
    setActivePageId((prev) => (prev && pages.some((p) => p.id === prev) ? prev : pages[0].id));
  }, [pages]);

  if (loading) return <div className="p-8"><LoadingState label="Loading app config…" /></div>;
  if (error) {
    return (
      <div className="p-10">
        <Card className="glass-panel p-6">
          <p className="text-sm font-medium">Failed to load app</p>
          <p className="mt-1 text-xs text-muted-foreground">{error.message}</p>
          <div className="mt-4">
            <Link to="/"><Button variant="outline">Back to dashboard</Button></Link>
          </div>
        </Card>
      </div>
    );
  }
  if (!app) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">App not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">No config registered for id <code>{id}</code></p>
        <Link to="/" className="mt-4 inline-block"><Button variant="outline">Back to dashboard</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={getAppStyle(app)}>
      <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-10">
      <div>
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Dashboard
        </Link>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{app.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{app.description}</p>
          </div>
          <Badge variant="outline" className="font-mono text-xs">v{app.version}</Badge>
        </div>
      </div>

      {app.auth?.enabled ? <AuthPanel /> : null}

      {pages.length === 0 ? (
        <Card className="glass-panel p-6">
          <p className="text-sm font-medium">No pages found</p>
          <p className="mt-1 text-xs text-muted-foreground">
            This app config loaded, but it didn’t contain any renderable pages.
          </p>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="glass-panel p-3">
            <div className="flex flex-wrap gap-2">
              {pages.map((p) => (
                <Button
                  key={p.id}
                  variant={p.id === activePageId ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActivePageId(p.id)}
                  className={p.id === activePageId ? "bg-gradient-to-r from-primary to-[oklch(0.55_0.22_268)]" : ""}
                >
                  {p.title}
                </Button>
              ))}
            </div>
          </Card>

          {pages
            .filter((p) => p.id === activePageId)
            .map((page) => (
              <section key={page.id} className="space-y-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">{page.title}</h2>
                <div className={layoutClass(page.layout)}>
                  {(page.components ?? []).map((c) => (
                    <RenderComponent key={c.id} config={c} />
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}
      </div>
    </div>
  );
}

function getAppStyle(app: NonNullable<ReturnType<typeof useEngineApp>["data"]>): CSSProperties {
  const ui = app.ui ?? {};
  const isLight = ui.theme === "light";
  const background = ui.backgroundColor ?? (isLight ? "#f8fafc" : undefined);
  const foreground = ui.textColor ?? (isLight ? "#0f172a" : undefined);
  const primary = ui.primaryColor;
  const accent = ui.accentColor;
  const card = ui.cardColor;

  return {
    ...(background ? { "--background": background, backgroundColor: background } : {}),
    ...(foreground ? { "--foreground": foreground, color: foreground } : {}),
    ...(primary ? { "--primary": primary, "--ring": primary } : {}),
    ...(accent ? { "--accent": accent } : {}),
    ...(card ? {
      "--card": card,
      "--app-panel-bg": card,
      "--app-panel-border": "color-mix(in srgb, var(--foreground) 16%, transparent)"
    } : {}),
  } as CSSProperties;
}

function layoutClass(layout?: string) {
  if (layout === "grid") {
    return "grid gap-6 lg:grid-cols-2";
  }

  if (layout === "form") {
    return "max-w-3xl space-y-6";
  }

  return "space-y-6";
}

function AuthPanel() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState<"login" | "register" | null>(null);
  const [hasToken, setHasToken] = useState(() =>
    typeof window !== "undefined" && Boolean(window.localStorage.getItem("token"))
  );

  async function submit(mode: "login" | "register") {
    setLoading(mode);
    try {
      const result = await apiPost<{ token: string; user?: { email?: string; role?: string } }>(
        `/api/auth/${mode}`,
        mode === "register" ? { email, password, name: email.split("@")[0] } : { email, password }
      );

      window.localStorage.setItem("token", result.token);
      setHasToken(true);
      window.dispatchEvent(new CustomEvent("engine-data-changed"));
      toast.success(mode === "register" ? "Account created" : "Signed in");
    } catch (error: any) {
      toast.error(mode === "register" ? "Register failed" : "Login failed", {
        description: error?.message || "Check your credentials"
      });
    } finally {
      setLoading(null);
    }
  }

  function logout() {
    window.localStorage.removeItem("token");
    setHasToken(false);
    window.dispatchEvent(new CustomEvent("engine-data-changed"));
    toast.success("Signed out");
  }

  return (
    <Card className="glass-panel p-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <LockKeyhole className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Authentication Required</h2>
            {hasToken ? <Badge variant="secondary">token active</Badge> : null}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <Label className="mb-1.5 block text-xs">Email</Label>
              <Input value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <Label className="mb-1.5 block text-xs">Password</Label>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" disabled={loading !== null} onClick={() => submit("login")}>
            {loading === "login" ? "Signing in..." : "Login"}
          </Button>
          <Button disabled={loading !== null} onClick={() => submit("register")}>
            {loading === "register" ? "Creating..." : "Register"}
          </Button>
          {hasToken ? (
            <Button variant="ghost" onClick={logout}>
              Logout
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
