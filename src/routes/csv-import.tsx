import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, ArrowRight, Sparkles } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/csv-import")({
  head: () => ({ meta: [{ title: "CSV Import — Forge" }] }),
  component: CSVImport,
});

const TARGET_FIELDS = ["name", "email", "plan", "status", "notes"];

function suggest(header: string): string {
  const h = header.toLowerCase().replace(/[^a-z]/g, "");
  for (const t of TARGET_FIELDS) if (h.includes(t)) return t;
  if (h.includes("mail")) return "email";
  if (h.includes("tier") || h.includes("subscription")) return "plan";
  return "";
}

function parseCSV(text: string): { headers: string[]; rows: string[][] } {
  const lines = text.trim().split(/\r?\n/);
  const split = (l: string) => l.split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
  const headers = split(lines[0] ?? "");
  const rows = lines.slice(1).map(split);
  return { headers, rows };
}

function CSVImport() {
  const [filename, setFilename] = useState("");
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);
  const [mapping, setMapping] = useState<Record<string, string>>({});

  const handleFile = async (file: File) => {
    setFilename(file.name);
    const text = await file.text();
    const { headers, rows } = parseCSV(text);
    setHeaders(headers);
    setRows(rows);
    const m: Record<string, string> = {};
    headers.forEach((h) => (m[h] = suggest(h)));
    setMapping(m);
  };

  const loadSample = () => {
    const sample = "Full Name,Email Address,Subscription,Status\nAria Chen,aria@northwave.io,Pro,Active\nMarcus Reed,marcus@helix.dev,Enterprise,Active\nSofia Park,sofia@lumen.co,Free,Trial";
    setFilename("sample.csv");
    const { headers, rows } = parseCSV(sample);
    setHeaders(headers); setRows(rows);
    const m: Record<string, string> = {};
    headers.forEach((h) => (m[h] = suggest(h)));
    setMapping(m);
  };

  const mapped = useMemo(() => {
    return rows.slice(0, 8).map((r) => {
      const obj: Record<string, string> = {};
      headers.forEach((h, i) => {
        const target = mapping[h];
        if (target) obj[target] = r[i] ?? "";
      });
      return obj;
    });
  }, [rows, headers, mapping]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6 lg:p-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Data Pipeline</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">CSV Import</h1>
          <p className="mt-1 text-sm text-muted-foreground">Upload a CSV, review auto-mapped fields, then preview before insert.</p>
        </div>
        <Button variant="outline" onClick={loadSample}>Load sample</Button>
      </div>

      <Card className="glass-panel border-dashed p-8">
        <label className="flex cursor-pointer items-center justify-center gap-3 text-center">
          <Upload className="h-5 w-5 text-primary" />
          <span className="text-sm">{filename || "Drop or click to upload .csv"}</span>
          <input type="file" accept=".csv,text/csv" className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
        </label>
      </Card>

      {headers.length > 0 && (
        <>
          <Card className="glass-panel p-5">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Field Mapping</h3>
              <Badge variant="outline" className="text-[10px]">auto-suggested</Badge>
            </div>
            <div className="grid gap-3">
              {headers.map((h) => (
                <div key={h} className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <code className="rounded-md bg-muted/40 px-3 py-2 font-mono text-xs">{h}</code>
                  <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                  <Select value={mapping[h] || "__skip"} onValueChange={(v) => setMapping((m) => ({ ...m, [h]: v === "__skip" ? "" : v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__skip">— Skip column —</SelectItem>
                      {TARGET_FIELDS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-panel overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <h3 className="text-sm font-semibold">Preview ({rows.length} rows)</h3>
              <Button onClick={() => toast.success(`Inserted ${rows.length} rows`)} className="bg-gradient-to-r from-primary to-[oklch(0.55_0.22_268)]">
                Insert Records
              </Button>
            </div>
            <div className="overflow-x-auto p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    {TARGET_FIELDS.map((f) => (
                      <TableHead key={f} className="text-xs uppercase tracking-wider text-muted-foreground">{f}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mapped.map((r, i) => (
                    <TableRow key={i}>
                      {TARGET_FIELDS.map((f) => (
                        <TableCell key={f} className="text-sm">{r[f] || <span className="text-muted-foreground">—</span>}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
