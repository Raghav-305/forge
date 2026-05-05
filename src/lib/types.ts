export type ComponentType = "table" | "form" | "cards" | string;

export interface FieldConfig {
  key: string;
  name?: string;
  label: string;
  type?: "text" | "number" | "email" | "select" | "textarea";
  options?: string[];
  required?: boolean;
}

export interface ComponentConfig {
  id: string;
  type: ComponentType;
  title?: string;
  description?: string;
  dataSource?: string; // key into mock data
  fields?: FieldConfig[];
  columns?: { key: string; label: string }[];
  cards?: { label: string; value: string | number; delta?: string }[];
}

export interface AppUiConfig {
  theme?: "light" | "dark";
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  cardColor?: string;
  accentColor?: string;
}

export interface PageConfig {
  id: string;
  title: string;
  layout?: "stack" | "grid" | "form" | string;
  components: ComponentConfig[];
}

export interface AppConfig {
  id: string;
  slug?: string;
  name: string;
  description?: string;
  version?: string;
  auth?: {
    enabled?: boolean;
    roles?: string[];
  };
  ui?: AppUiConfig;
  pages: PageConfig[];
}

export interface Diagnostic {
  level: "info" | "warning" | "error" | "fix";
  message: string;
  path?: string;
}

export interface EventLog {
  id: string;
  timestamp: string;
  type: "create" | "update" | "delete" | "error" | "import";
  app: string;
  message: string;
  status: "success" | "failed" | "warning";
}
