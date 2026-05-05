import { z } from 'zod';

const fieldSchema = z.object({
  name: z.string(),
  type: z.enum(['text', 'email', 'number', 'date', 'boolean', 'json', 'file', 'select', 'multiselect']),
  required: z.boolean().optional(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  validation: z.record(z.any()).optional(),
  options: z.array(z.object({
    value: z.string(),
    label: z.string()
  })).optional()
});

const frontendFieldSchema = z.object({
  key: z.string(),
  label: z.string().optional(),
  type: z.enum(['text', 'email', 'number', 'date', 'boolean', 'json', 'file', 'select', 'multiselect', 'textarea']).optional(),
  required: z.boolean().optional(),
  options: z.array(z.union([
    z.string(),
    z.object({
      value: z.string(),
      label: z.string()
    })
  ])).optional()
});

const entitySchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string().optional(),
  fields: z.array(fieldSchema),
  scope: z.enum(['global', 'user']).default('global'),
  permissions: z.record(z.array(z.string())).optional(),
  viewerFilters: z.record(z.any()).optional()
});

const pageSchema = z.object({
  id: z.string(),
  title: z.string(),
  route: z.string().optional(),
  layout: z.enum(['stack', 'grid', 'form']).optional(),
  components: z.array(z.any()).default([])
});

const configSchema = z.object({
  name: z.string(),
  slug: z.string(),
  version: z.string().default('1.0.0'),
  description: z.string().optional(),
  auth: z.object({
    enabled: z.boolean().default(false),
    roles: z.array(z.string()).default(['user'])
  }).optional(),
  ui: z.object({
    theme: z.enum(['light', 'dark']).default('light'),
    primaryColor: z.string().optional(),
    backgroundColor: z.string().optional(),
    textColor: z.string().optional(),
    cardColor: z.string().optional(),
    accentColor: z.string().optional()
  }).optional(),
  entities: z.array(entitySchema).default([]),
  pages: z.array(pageSchema).default([]),
  sensitiveFields: z.array(z.string()).default(['password', 'token']),
  webhooks: z.array(z.object({
    event: z.string(),
    url: z.string(),
    method: z.string().default('POST')
  })).optional()
});

export interface Repair {
  type: 'fix' | 'warning' | 'error';
  message: string;
  repair?: string;
}

export function normalizeConfig(raw: any): { config: any; repairs: Repair[] } {
  const repairs: Repair[] = [];
  const normalized = JSON.parse(JSON.stringify(raw));

  if (!normalized.name) {
    repairs.push({
      type: 'fix',
      message: 'Missing config name',
      repair: `Generated name from slug: ${normalized.slug || 'untitled'}`
    });
    normalized.name = normalized.slug || 'Untitled App';
  }

  if (!normalized.slug) {
    repairs.push({
      type: 'fix',
      message: 'Missing config slug',
      repair: `Generated slug from name: ${normalized.name.toLowerCase().replace(/\s+/g, '-')}`
    });
    normalized.slug = normalized.name.toLowerCase().replace(/\s+/g, '-');
  }

  if (normalized.slug && !/^[a-z0-9-]+$/.test(normalized.slug)) {
    repairs.push({
      type: 'fix',
      message: 'Invalid slug format',
      repair: `Converted to valid format: ${normalized.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-')}`
    });
    normalized.slug = normalized.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  }

  if (!normalized.version) {
    repairs.push({
      type: 'fix',
      message: 'Missing version',
      repair: 'Defaulting to 1.0.0'
    });
    normalized.version = '1.0.0';
  }

  if (normalized.entities) {
    for (const entity of normalized.entities) {
      if (!entity.slug) {
        repairs.push({
          type: 'fix',
          message: `Entity missing slug in ${entity.name || 'unnamed entity'}`,
          repair: `Generated slug: ${(entity.name || 'entity').toLowerCase().replace(/\s+/g, '-')}`
        });
        entity.slug = (entity.name || 'entity').toLowerCase().replace(/\s+/g, '-');
      }

      if (entity.fields) {
        for (const field of entity.fields) {
          if (!field.type) {
            repairs.push({
              type: 'fix',
              message: `Field ${field.name} in ${entity.slug} missing type`,
              repair: 'Defaulting to "text"'
            });
            field.type = 'text';
          }

          if (!field.label) {
            field.label = field.name.charAt(0).toUpperCase() + field.name.slice(1);
          }
        }
      }
    }
  }

  if (normalized.id && !normalized.slug) {
    normalized.slug = normalized.id;
    repairs.push({
      type: 'fix',
      message: 'Used id as config slug',
      repair: `Set slug to ${normalized.slug}`
    });
  }

  if ((!Array.isArray(normalized.pages) || normalized.pages.length === 0) && normalized.ui?.pages) {
    if (Array.isArray(normalized.ui.pages)) {
      normalized.pages = normalized.ui.pages;
    } else if (typeof normalized.ui.pages === 'object') {
      normalized.pages = Object.entries(normalized.ui.pages).map(([key, value]) => ({
        id: (value as any).id || key,
        ...(value as any)
      }));
    }

    delete normalized.ui.pages;

    repairs.push({
      type: 'fix',
      message: 'Moved ui.pages into top-level pages',
      repair: 'Populated pages from ui.pages'
    });
  }

  if (!Array.isArray(normalized.pages)) {
    normalized.pages = [];
  }

  if (normalized.pages) {
    for (const page of normalized.pages) {
      if (!page.id) {
        repairs.push({
          type: 'fix',
          message: 'Page missing ID',
          repair: `Generated ID: ${(page.title || 'page').toLowerCase().replace(/\s+/g, '-')}`
        });
        page.id = (page.title || 'page').toLowerCase().replace(/\s+/g, '-');
      }

      if (!page.title) {
        page.title = page.name || page.id;
      }

      if (!Array.isArray(page.components)) {
        page.components = [];
      }

      const inferredDataSource = page.components.find((component: any) => component?.dataSource || component?.entity)?.dataSource
        ?? page.components.find((component: any) => component?.dataSource || component?.entity)?.entity;

      page.components = page.components.map((component: any, index: number) => normalizeComponent(component, page.id, index, repairs));
      page.components = page.components.map((component: any) => ({
        ...component,
        dataSource: component.dataSource || component.entity || (component.type === 'form' ? inferredDataSource : undefined)
      }));
    }
  }

  normalized.entities = normalizeEntities(normalized.entities, normalized.pages, repairs);

  const parsed = configSchema.safeParse(normalized);

  if (!parsed.success) {
    repairs.push({
      type: 'error',
      message: 'Invalid config structure after repairs',
      repair: 'Using default config with preserved slug and name'
    });

    return {
      config: generateDefaultConfig(normalized.slug, normalized.name),
      repairs
    };
  }

  if (parsed.data.entities.length === 0 && parsed.data.pages.length > 0) {
    repairs.push({
      type: 'warning',
      message: 'Config has pages but no entities',
      repair: 'Add entities to enable data operations'
    });
  }

  return {
    config: parsed.data,
    repairs
  };
}

function normalizeComponent(component: any, pageId: string, index: number, repairs: Repair[]): any {
  const props = component?.props && typeof component.props === 'object' ? component.props : {};
  const normalized = { ...(component || {}), ...props };
  delete normalized.props;

  if (!normalized.id) {
    normalized.id = `${pageId}-component-${index + 1}`;
    repairs.push({
      type: 'fix',
      message: `Component missing id on page ${pageId}`,
      repair: `Generated id: ${normalized.id}`
    });
  }

  if (!normalized.type) {
    normalized.type = 'table';
    repairs.push({
      type: 'fix',
      message: `Component ${normalized.id} missing type`,
      repair: 'Defaulting to table'
    });
  }

  if (Array.isArray(normalized.fields)) {
    normalized.fields = normalized.fields.map((field: any) => normalizeFrontendField(field));
  }

  return normalized;
}

function normalizeFrontendField(field: any): any {
  const fieldWithKey = {
    ...field,
    key: field.key || field.name || field.id
  };
  const parsed = frontendFieldSchema.safeParse(fieldWithKey);
  if (!parsed.success) return field;

  return {
    ...fieldWithKey,
    key: parsed.data.key,
    label: parsed.data.label || parsed.data.key,
    type: parsed.data.type || 'text',
    options: parsed.data.options?.map((option) => typeof option === 'string' ? option : option.label)
  };
}

function normalizeEntities(entities: any, pages: any[], repairs: Repair[]): any[] {
  const normalizedEntities = Array.isArray(entities) ? entities.map((entity: any) => ({
    ...entity,
    slug: entity.slug || entity.id || slugify(entity.name || 'entity'),
    name: entity.name || entity.slug || entity.id || 'Entity',
    fields: Array.isArray(entity.fields)
      ? entity.fields.map((field: any) => normalizeBackendField(field))
      : []
  })) : [];

  const known = new Set(normalizedEntities.map((entity: any) => entity.slug));

  for (const page of pages) {
    for (const component of page.components || []) {
      const source = component.dataSource || component.entity;
      if (!source || known.has(source)) continue;

      const fields = inferFieldsFromComponent(component);
      normalizedEntities.push({
        slug: source,
        name: titleCase(source),
        fields,
        scope: 'global'
      });
      known.add(source);
      repairs.push({
        type: 'fix',
        message: `Inferred entity from component dataSource "${source}"`,
        repair: `Created entity ${source}`
      });
    }
  }

  return normalizedEntities;
}

function normalizeBackendField(field: any): any {
  const name = field.name || field.key || slugify(field.label || 'field');

  return {
    ...field,
    name,
    key: field.key || name,
    label: field.label || titleCase(name),
    type: normalizeFieldType(field.type),
    options: Array.isArray(field.options)
      ? field.options.map((option: any) => typeof option === 'string'
        ? { value: option, label: option }
        : option)
      : undefined
  };
}

function inferFieldsFromComponent(component: any): any[] {
  const fields = Array.isArray(component.fields)
    ? component.fields
    : Array.isArray(component.columns)
      ? component.columns
      : [];

  return fields.map((field: any) => normalizeBackendField(field));
}

function normalizeFieldType(type: any): string {
  if (type === 'textarea') return 'text';
  if (['text', 'email', 'number', 'date', 'boolean', 'json', 'file', 'select', 'multiselect'].includes(type)) {
    return type;
  }
  return 'text';
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item';
}

function titleCase(value: string): string {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function generateDefaultConfig(slug: string, name: string): any {
  const configSlug = slug || 'default-app';
  const configName = name || 'Default App';

  return {
    name: configName,
    slug: configSlug,
    version: '1.0.0',
    description: 'Automatically generated default configuration',
    ui: {
      theme: 'light'
    },
    entities: [
      {
        slug: 'items',
        name: 'Items',
        fields: [
          { name: 'name', key: 'name', label: 'Name', type: 'text' },
          { name: 'price', key: 'price', label: 'Price', type: 'number' }
        ],
        scope: 'global'
      }
    ],
    pages: [
      {
        id: 'home',
        title: 'Home',
        components: [
          {
            id: 'items-table',
            type: 'table',
            title: 'Items',
            dataSource: 'items',
            columns: [
              { key: 'name', label: 'Name' },
              { key: 'price', label: 'Price' }
            ]
          }
        ]
      }
    ],
    sensitiveFields: ['password', 'token'],
    auth: {
      enabled: false,
      roles: ['user']
    }
  };
}

export function inferFieldType(values: string[]): string {
  const nonEmpty = values.filter(v => v && v.trim());
  if (nonEmpty.length === 0) return 'text';

  if (nonEmpty.every(v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))) {
    return 'email';
  }

  if (nonEmpty.every(v => !isNaN(Number(v)))) {
    return 'number';
  }

  if (nonEmpty.every(v => !isNaN(Date.parse(v)))) {
    return 'date';
  }

  if (nonEmpty.every(v => ['true', 'false', 'yes', 'no', '1', '0'].includes(v.toLowerCase()))) {
    return 'boolean';
  }

  return 'text';
}
