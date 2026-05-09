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
  console.log('[FieldRow] Rendering field:', field?.key, 'type:', field?.type, 'value:', value);
  
  const handleChange = (newValue: string) => {
    try {
      console.log('[FieldRow] handleChange START - field:', field?.key, 'new value:', newValue);
      setFieldValue(field?.key, newValue);
      console.log('[FieldRow] handleChange COMPLETE');
    } catch (err) {
      console.error('[FieldRow] handleChange ERROR:', err);
    }
  };
  
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
  console.log('[DynamicForm] START - id:', config.id, 'dataSource:', config.dataSource);
  const fields = config.fields ?? [];
  console.log('[DynamicForm] Fields loaded:', fields.length);
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
    console.log('[DynamicForm.set] START - key:', k, 'value:', v);
    try {
      setValues((p) => {
        const newVals = p[k] === v ? p : { ...p, [k]: v };
        console.log('[DynamicForm.set] State updated, new keys:', Object.keys(newVals));
        return newVals;
      });
      console.log('[DynamicForm.set] COMPLETE');
    } catch (err) {
      console.error('[DynamicForm.set] ERROR:', err);
    }
  }, []);

  const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[DynamicForm] Submit triggered');
    if (saving) {
      console.warn('[DynamicForm] Already saving, ignoring submit');
      return;
    }

    const source = config.dataSource;
    if (!source) {
      console.error('[DynamicForm] No data source configured');
      setFormError("No data source configured for this form");
      toast.error("No data source configured for this form");
      return;
    }

    console.log('[DynamicForm] Starting form submission to:', source);
    setSaving(true);
    setFormError(null);
    try {
      console.log('[DynamicForm] Creating record with values:', Object.keys(values));
      await createEngineRecord(source, values, configSlug);
      console.log('[DynamicForm] Record created successfully');
      setValues({});
      toast.success("Record created");
    } catch (error: any) {
      const message = error?.message || "The engine could not create this record";
      console.error('[DynamicForm] Record creation failed:', message);
      setFormError(message);
      toast.error("Create failed", {
        description: message
      });
    } finally {
      setSaving(false);
    }
  }, [config.dataSource, configSlug, saving, values]);

  console.log('[DynamicForm] About to render form JSX with', fields.length, 'fields');
  
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
        {fields.map((f, idx) => {
          console.log('[DynamicForm] Rendering form field:', idx, 'key:', f?.key, 'type:', f?.type);
          return (
            <FieldRow
              key={f?.key}
              field={f}
              value={values[f?.key] ?? ""}
              setFieldValue={set}
            />
          );
        })}
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
