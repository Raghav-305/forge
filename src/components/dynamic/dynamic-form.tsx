import { useState } from "react";
import type { ComponentConfig } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/states";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { createEngineRecord } from "@/hooks/use-engine-data";

export function DynamicForm({ config }: { config: ComponentConfig }) {
  const fields = config.fields ?? [];
  const [values, setValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  if (fields.length === 0) {
    return (
      <Card className="glass-panel p-5">
        <EmptyState label="No fields defined for this form" />
      </Card>
    );
  }

  const set = (k: string, v: string) => setValues((p) => ({ ...p, [k]: v }));

  return (
    <Card className="glass-panel p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold tracking-tight">{config.title ?? "Form"}</h3>
        {config.description && (
          <p className="text-xs text-muted-foreground">{config.description}</p>
        )}
      </div>
      <form
        className="grid gap-4 sm:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const source = config.dataSource;
          if (!source) {
            toast.error("No data source configured for this form");
            return;
          }

          setSaving(true);
          try {
            await createEngineRecord(source, values);
            setValues({});
            toast.success("Record created");
          } catch (error: any) {
            toast.error("Create failed", {
              description: error?.message || "The engine could not create this record"
            });
          } finally {
            setSaving(false);
          }
        }}
      >
        {fields.map((f) => (
          <div key={f.key} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
            <Label className="mb-1.5 block text-xs">{f.label}{f.required && <span className="text-primary"> *</span>}</Label>
            {f.type === "textarea" ? (
              <Textarea
                value={values[f.key] ?? ""}
                onChange={(e) => set(f.key, e.target.value)}
                required={f.required}
              />
            ) : f.type === "select" ? (
              <Select onValueChange={(v) => set(f.key, v)} value={values[f.key]}>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>
                  {(f.options ?? []).map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type={f.type ?? "text"}
                value={values[f.key] ?? ""}
                onChange={(e) => set(f.key, e.target.value)}
                required={f.required}
              />
            )}
          </div>
        ))}
        <div className="sm:col-span-2 flex justify-end">
          <Button disabled={saving} type="submit" className="bg-gradient-to-r from-primary to-[oklch(0.55_0.22_268)]">
            {saving ? "Saving..." : "Submit"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
