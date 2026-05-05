import { EngineContext } from '../types';

export async function resolveFilters(ctx: EngineContext): Promise<EngineContext> {
  const entity = ctx.config.entities?.find((e: any) => e.slug === ctx.input.entity);
  const action = ctx.input.action;

  ctx.query = {
    where: {},
    orderBy: {},
    ...ctx.query
  };

  if (entity?.scope === 'user' && ctx.user?.id) {
    ctx.query.where.owner_id = ctx.user.id;
  }

  if (ctx.input.filters && typeof ctx.input.filters === 'object') {
    Object.assign(ctx.query.where, ctx.input.filters);
  }

  if (ctx.user?.role === 'viewer' && entity?.viewerFilters) {
    Object.assign(ctx.query.where, entity.viewerFilters);
  }

  if (ctx.input.search) {
    ctx.query.where.OR = [
      { payload: { contains: ctx.input.search, mode: 'insensitive' } },
      { id: { contains: ctx.input.search } }
    ];
  }

  ctx.query.skip = Math.max(0, ctx.input.skip || 0);
  ctx.query.take = Math.min(ctx.input.take || 50, 100);

  if (ctx.input.sortBy) {
    ctx.query.orderBy[ctx.input.sortBy] = ctx.input.sortOrder || 'desc';
  } else {
    ctx.query.orderBy.created_at = 'desc';
  }

  ctx.metadata.filtersApplied = true;
  return ctx;
}
