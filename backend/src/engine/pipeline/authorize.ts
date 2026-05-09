import { EngineContext } from '../types.js';

export async function authorize(ctx: EngineContext): Promise<EngineContext> {
  const action = ctx.input.action;
  const entity = ctx.input.entity;

  const entityConfig = ctx.config.entities?.find((e: any) => e.slug === entity);

  if (!entityConfig && ctx.input.action !== 'list_configs') {
    ctx.warnings.push({
      code: 'ENTITY_NOT_FOUND',
      message: `Entity "${entity}" not found in config`,
      repair: 'Using default permissions',
      timestamp: new Date().toISOString()
    });

    if (ctx.metadata.safeMode) {
      return ctx;
    }

    ctx.errors.push({
      code: 'ENTITY_NOT_FOUND',
      message: `Entity "${entity}" not found in config`,
      fatal: true
    });
    return ctx;
  }

  const permissions = entityConfig?.permissions || {};
  const userRole = ctx.user?.role || 'anonymous';
  const allowedRoles = permissions[action] || (ctx.config.auth?.enabled ? ['admin', 'user'] : ['admin', 'user', 'anonymous']);

  if (!allowedRoles.includes(userRole) && userRole !== 'admin') {
    ctx.errors.push({
      code: 'FORBIDDEN',
      message: `User role "${userRole}" not authorized for ${action} on ${entity}`,
      fatal: true,
      timestamp: new Date().toISOString()
    });
  }

  ctx.metadata.authorized = true;
  return ctx;
}
