import type { AppConfig, EventLog, Diagnostic } from "./types";

export const mockApps: AppConfig[] = [
  {
    id: "crm",
    name: "Customer CRM",
    description: "Track customers and their lifecycle",
    version: "1.2.0",
    pages: [
      {
        id: "overview",
        title: "Overview",
        components: [
          {
            id: "stats",
            type: "cards",
            title: "Key Metrics",
            cards: [
              { label: "Total Customers", value: 1284, delta: "+12.4%" },
              { label: "Active Deals", value: 87, delta: "+3.1%" },
              { label: "Revenue (MTD)", value: "$94,210", delta: "+8.7%" },
              { label: "Churn Rate", value: "2.1%", delta: "-0.4%" },
            ],
          },
          {
            id: "customers",
            type: "table",
            title: "Recent Customers",
            dataSource: "customers",
            columns: [
              { key: "name", label: "Name" },
              { key: "email", label: "Email" },
              { key: "plan", label: "Plan" },
              { key: "status", label: "Status" },
            ],
          },
          {
            id: "newcust",
            type: "form",
            title: "Add Customer",
            fields: [
              { key: "name", label: "Full Name", type: "text", required: true },
              { key: "email", label: "Email", type: "email", required: true },
              { key: "plan", label: "Plan", type: "select", options: ["Free", "Pro", "Enterprise"] },
              { key: "notes", label: "Notes", type: "textarea" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "inventory",
    name: "Inventory Manager",
    description: "Stock and warehouse tracking",
    version: "0.9.3",
    pages: [
      {
        id: "main",
        title: "Stock",
        components: [
          {
            id: "stk",
            type: "cards",
            title: "Warehouse",
            cards: [
              { label: "SKUs", value: 542 },
              { label: "Low Stock", value: 14, delta: "alert" },
              { label: "Suppliers", value: 23 },
            ],
          },
          {
            id: "items",
            type: "table",
            title: "Items",
            dataSource: "items",
            columns: [
              { key: "sku", label: "SKU" },
              { key: "name", label: "Name" },
              { key: "qty", label: "Qty" },
              { key: "loc", label: "Location" },
            ],
          },
        ],
      },
    ],
  },
];

export const mockData: Record<string, Record<string, unknown>[]> = {
  customers: [
    { name: "Aria Chen", email: "aria@northwave.io", plan: "Pro", status: "Active" },
    { name: "Marcus Reed", email: "marcus@helix.dev", plan: "Enterprise", status: "Active" },
    { name: "Sofia Park", email: "sofia@lumen.co", plan: "Free", status: "Trial" },
    { name: "Kai Tanaka", email: "kai@vortex.app", plan: "Pro", status: "Active" },
    { name: "Elena Vasquez", email: "elena@stratus.cc", plan: "Enterprise", status: "Paused" },
  ],
  items: [
    { sku: "NX-001", name: "Carbon Frame", qty: 42, loc: "A-12" },
    { sku: "NX-002", name: "Hydraulic Arm", qty: 8, loc: "B-04" },
    { sku: "NX-003", name: "Sensor Array", qty: 120, loc: "C-22" },
  ],
};

export const mockHealth: Diagnostic[] = [
  { level: "info", message: "All 2 active configs validated successfully" },
  { level: "warning", message: "Inventory Manager: 'suppliers' table referenced but not defined", path: "inventory.pages[0]" },
  { level: "fix", message: "Auto-repaired missing 'id' field in 3 component configs" },
  { level: "info", message: "Engine v2.4.1 — last heartbeat 12s ago" },
];

export const mockLogs: EventLog[] = Array.from({ length: 24 }).map((_, i) => {
  const types: EventLog["type"][] = ["create", "update", "delete", "error", "import"];
  const statuses: EventLog["status"][] = ["success", "success", "success", "failed", "warning"];
  const apps = ["Customer CRM", "Inventory Manager"];
  const t = types[i % types.length];
  return {
    id: `evt_${1000 + i}`,
    timestamp: new Date(Date.now() - i * 1000 * 60 * 7).toISOString(),
    type: t,
    app: apps[i % apps.length],
    message:
      t === "error"
        ? "Validation failed for record id=" + (i + 100)
        : t === "import"
          ? "Imported 248 rows from CSV"
          : `Record ${t}d successfully`,
    status: statuses[i % statuses.length],
  };
});
