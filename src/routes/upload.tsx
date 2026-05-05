import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileJson, CheckCircle2, AlertTriangle, Wrench } from "lucide-react";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";
import type { Diagnostic } from "@/lib/types";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload Config — Forge" }] }),
  component: UploadPage,
});

function validate(json: unknown): Diagnostic[] {
  const out: Diagnostic[] = [];
  if (!json || typeof json !== "object") {
    out.push({ level: "error", message: "Root must be an object" });
    return out;
  }
  const j = json as Record<string, any>;
  if (!j.slug) out.push({ level: "warning", message: "Missing 'slug' — generated from name" });
  if (!j.name) out.push({ level: "warning", message: "No 'name' field — using 'Untitled App'" });
  if (!Array.isArray(j.pages) && !j.ui?.pages) {
    out.push({ level: "warning", message: "No top-level 'pages' array found; ui.pages will be mapped if present" });
  }
  out.push({ level: "info", message: "Schema validated against engine v2.4.1" });
  return out;
}

function UploadPage() {
  const [raw, setRaw] = useState<string>("");
  const [parsed, setParsed] = useState<unknown>(null);
  const [diags, setDiags] = useState<Diagnostic[]>([]);
  const [filename, setFilename] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [serverError, setServerError] = useState<string>("");

  const handleFile = async (file: File) => {
    setFilename(file.name);
    const text = await file.text();
    setRaw(text);
    try {
      const j = JSON.parse(text);
      setParsed(j);
      setDiags(validate(j));
    } catch (e) {
      setParsed(null);
      setDiags([{ level: "error", message: `Invalid JSON: ${(e as Error).message}` }]);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6 lg:p-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-primary">Configurator</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Upload Config</h1>
        <p className="mt-1 text-sm text-muted-foreground">Drop a JSON file to preview its structure and diagnostics.</p>
      </div>

      <Card className="glass-panel border-dashed p-10">
        <label className="flex cursor-pointer flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[oklch(0.55_0.22_268/0.2)] ring-1 ring-primary/30">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium">{filename || "Drop or click to upload .json"}</p>
            <p className="text-xs text-muted-foreground">Max 5MB · Engine schema v2.x</p>
          </div>
          <input
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </label>
      </Card>

      {parsed != null && (
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="glass-panel lg:col-span-3 overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <FileJson className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Parsed Structure</h3>
            </div>
            <pre className="max-h-[480px] overflow-auto p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {JSON.stringify(parsed, null, 2)}
            </pre>
          </Card>

          <Card className="glass-panel lg:col-span-2 p-0">
            <div className="border-b border-border/60 px-4 py-3">
              <h3 className="text-sm font-semibold">Diagnostics</h3>
            </div>
            <div className="divide-y divide-border/40">
              {diags.map((d, i) => {
                const Icon = d.level === "fix" ? Wrench : d.level === "warning" || d.level === "error" ? AlertTriangle : CheckCircle2;
                const color = d.level === "error" ? "text-destructive" : d.level === "warning" ? "text-warning" : d.level === "fix" ? "text-primary" : "text-success";
                return (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <Icon className={`mt-0.5 h-4 w-4 ${color}`} />
                    <p className="flex-1 text-xs">{d.message}</p>
                    <Badge variant="outline" className="text-[10px] uppercase">{d.level}</Badge>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-border/60 p-3">
              <Button
                disabled={diags.some((d) => d.level === "error") || saving}
                onClick={async () => {
                  if (!parsed) return;
                  setSaving(true);
                  setServerError("");
                  try {
                    const result = await apiPost<any>("/api/configs", parsed);
                    toast.success("Config activated", {
                      description: result?.config?.name
                        ? `Created ${result.config.name}`
                        : 'Config activated successfully.'
                    });
                  } catch (error: any) {
                    setServerError(error?.message || 'Failed to activate config');
                    toast.error('Activation failed');
                  } finally {
                    setSaving(false);
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-[oklch(0.55_0.22_268)]"
              >
                {saving ? 'Activating…' : 'Activate Config'}
              </Button>
              {serverError ? (
                <p className="mt-2 text-xs text-destructive">{serverError}</p>
              ) : null}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
