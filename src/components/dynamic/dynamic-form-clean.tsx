import { memo, useCallback, useState } from "react";
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

const FieldRow = memo(function FieldRow({
  field,
  value,
  setFieldValue,
}: {
  field: NonNullable<ComponentConfig["fields"]>[number];
  value: string;
  setFieldValue: (key: string, value: string) => void;
}) {
  const handleChange = useCallback((newValue: string) => {
    setFieldValue(field?.key, newValue);
  }, [field?.key, setFieldValue]);
  
  return (
    <div className={field?.type === "textarea" ? "sm:col-span-2" : ""}>
      <Label className="mb-1.5 block text-xs">
        {field?.label}
        {field?.required && <span className="text-primary"> *</span>}
      </Label>
      {field?.type === "textarea" ? (
        <Textarea
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          required={field?.required}
        />
      ) : field?.type === "select" ? (
        <Select onValueChange={handleChange} value={value}>
          <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
          <SelectContent>
            {(field?.options ?? []).map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type={field?.type ?? "text"}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          required={field?.required}
        />
      )}
    </div>
  );
});

export function DynamicForm({ config, configSlug }: { config: ComponentConfig; configSlug?: string }) {
  const fields = config.fields ?? [];
  const [values, setValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  if (fields.length === 0) {
    return (
      <Card className="glass-panel p-5">
        <EmptyState label="No fields defined for this form" />
      </Card>
    );
  }

  const set = useCallback((k: string, v: string) => {
    setValues((p) => p[k] === v ? p : { ...p, [k]: v });
  }, []);

  const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (saving) return;

    const source = config.dataSource;
    if (!source) {
      setFormError("No data source configured for this form");
      toast.error("No data source configured for this form");
      return;
    }

    setSaving(true);
    setFormError(null);
    try {
      await createEngineRecord(source, values, configSlug);
      setValues({});
      toast.success("Record created");
    } catch (error: any) {
      const message = error?.message || "The engine could not create this record";
      setFormError(message);
      toast.error("Create failed", { description: message });
    } finally {
      setSaving(false);
    }
  }, [config.dataSource, configSlug, saving, values]);

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
        onSubmit={submit}
      >
        {fields.map((f) => (
          <FieldRow
            key={f?.key}
            field={f}
            value={values[f?.key] ?? ""}
            setFieldValue={set}
          />
        ))}
        <div className="sm:col-span-2 flex justify-end">
          <Button disabled={saving} type="submit" className="bg-gradient-to-r from-primary to-primary/80">
            {saving ? "Saving..." : "Submit"}
          </Button>
        </div>
        {formError ? (
          <p className="sm:col-span-2 text-xs text-destructive">{formError}</p>
        ) : null}
      </form>
    </Card>
  );
}
