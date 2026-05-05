import { useEngineData } from "@/hooks/use-engine-data";
import type { ComponentConfig } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { LoadingState, EmptyState } from "@/components/states";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

export function DynamicTable({ config }: { config: ComponentConfig }) {
  const { data, loading, error } = useEngineData(config.dataSource);
  const cols = config.columns ?? [];

  return (
    <Card className="glass-panel overflow-hidden p-0">
      <div className="border-b border-border/60 px-5 py-4">
        <h3 className="text-sm font-semibold tracking-tight">{config.title ?? "Table"}</h3>
        {config.description && (
          <p className="text-xs text-muted-foreground">{config.description}</p>
        )}
      </div>
      <div className="p-4">
        {loading ? (
          <LoadingState label="Loading rows…" />
        ) : error ? (
          <EmptyState label={error.message} />
        ) : !data || data.length === 0 ? (
          <EmptyState label="No records found" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {cols.map((c) => (
                  <TableHead key={c.key} className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i} className="border-border/40">
                  {cols.map((c) => (
                    <TableCell key={c.key} className="text-sm">
                      {String(row[c.key] ?? "—")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </Card>
  );
}
