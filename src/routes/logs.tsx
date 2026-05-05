import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useEngineLogs } from "@/hooks/use-engine-data";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LoadingState, EmptyState } from "@/components/states";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/logs")({
  head: () => ({ meta: [{ title: "Event Logs — Forge" }] }),
  component: LogsPage,
});

const statusColor: Record<string, string> = {
  success: "bg-success/15 text-success border-success/30",
  failed: "bg-destructive/15 text-destructive border-destructive/30",
  warning: "bg-warning/15 text-warning border-warning/30",
};

function LogsPage() {
  const { data: logs, loading } = useEngineLogs();
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  const filtered = useMemo(() => {
    return (logs ?? []).filter((l) => {
      if (type !== "all" && l.type !== type) return false;
      if (status !== "all" && l.status !== status) return false;
      if (q && !`${l.app} ${l.message} ${l.id}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [logs, q, type, status]);

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-primary">Observability</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Event Logs</h1>
        <p className="mt-1 text-sm text-muted-foreground">Engine events, record changes, and runtime errors.</p>
      </div>

      <Card className="glass-panel p-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_180px_180px]">
          <Input placeholder="Search messages, apps, ids…" value={q} onChange={(e) => setQ(e.target.value)} />
          <Select value={type} onValueChange={setType}>
            <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {["create", "update", "delete", "error", "import"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {["success", "failed", "warning"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="glass-panel overflow-hidden p-0">
        {loading ? (
          <div className="p-6"><LoadingState /></div>
        ) : filtered.length === 0 ? (
          <div className="p-6"><EmptyState label="No events match these filters" /></div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>App</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((l) => (
                <TableRow key={l.id} className="border-border/40">
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {new Date(l.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm">{l.app}</TableCell>
                  <TableCell><Badge variant="outline" className="font-mono text-[10px] uppercase">{l.type}</Badge></TableCell>
                  <TableCell className="text-sm">{l.message}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-[10px] uppercase ${statusColor[l.status]}`}>{l.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-xs text-muted-foreground">{l.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
