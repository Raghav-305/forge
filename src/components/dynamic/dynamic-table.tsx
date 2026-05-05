import { useEngineData } from "@/hooks/use-engine-data";
import type { ComponentConfig } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { EmptyState, LoadingState } from "@/components/states";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MAX_RENDERED_ROWS = 100;

export function DynamicTable({
  config,
  configSlug,
}: {
  config: ComponentConfig;
  configSlug?: string;
}) {
  const { data, loading, error } = useEngineData(config.dataSource, configSlug);
  const cols = config.columns ?? [];
  const visibleRows = (data ?? []).slice(0, MAX_RENDERED_ROWS);
  const hiddenRows = Math.max((data?.length ?? 0) - visibleRows.length, 0);

  return (
    <Card className="glass-panel overflow-hidden p-0">
      <div className="border-b border-border/60 px-5 py-4">
        <h3 className="text-sm font-semibold tracking-tight">{config.title ?? "Table"}</h3>
        {config.description ? (
          <p className="text-xs text-muted-foreground">{config.description}</p>
        ) : null}
      </div>
      <div className="p-4">
        {loading ? (
          <LoadingState label="Loading rows..." />
        ) : error ? (
          <EmptyState label={error.message} />
        ) : !data || data.length === 0 ? (
          <EmptyState label="No records found" />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  {cols.map((c) => (
                    <TableHead
                      key={c.key}
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {c.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleRows.map((row, i) => (
                  <TableRow key={String(row.id ?? row._id ?? i)} className="border-border/40">
                    {cols.map((c) => (
                      <TableCell key={c.key} className="text-sm">
                        {String(row[c.key] ?? "-")}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {hiddenRows > 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Showing first {MAX_RENDERED_ROWS} rows. {hiddenRows} more rows are available.
              </p>
            ) : null}
          </>
        )}
      </div>
    </Card>
  );
}
