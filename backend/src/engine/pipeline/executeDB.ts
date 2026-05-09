import { EngineContext } from '../types.js';
import { prisma } from '../../db/prisma.js';

export async function executeDB(ctx: EngineContext): Promise<EngineContext> {
  const { entity, action, data, id } = ctx.input;
  const { slug: config_slug, version: config_version } = ctx.config;

  try {
    const startTime = Date.now();

    switch (action) {
      case 'list':
        ctx.result = await prisma.appData.findMany({
          where: {
            config_slug,
            config_version,
            entity_slug: entity,
            ...ctx.query.where
          },
          skip: ctx.query.skip,
          take: ctx.query.take,
          orderBy: ctx.query.orderBy
        });

        ctx.metadata.pagination = {
          skip: ctx.query.skip,
          take: ctx.query.take,
          hasMore: Array.isArray(ctx.result) && ctx.result.length === ctx.query.take
        };
        break;

      case 'get':
        ctx.result = await prisma.appData.findFirst({
          where: {
            config_slug,
            config_version,
            entity_slug: entity,
            id,
            ...ctx.query.where
          }
        });

        if (!ctx.result) {
          throw new Error('Record not found');
        }
        break;

      case 'create':
        const entityConfig = ctx.config.entities?.find((e: any) => e.slug === entity);
        if (entityConfig?.fields) {
          const missingFields = entityConfig.fields
            .filter((f: any) => {
              const fieldName = f.name ?? f.key;
              return f.required && fieldName && !data[fieldName];
            })
            .map((f: any) => f.name ?? f.key);

          if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
          }
        }

        ctx.result = await prisma.appData.create({
          data: {
            config_slug,
            config_version,
            entity_slug: entity,
            payload: data,
            owner_id: ctx.user?.id
          }
        });
        break;

      case 'update':
        const updateResult = await prisma.appData.updateMany({
          where: {
            config_slug,
            config_version,
            entity_slug: entity,
            id,
            ...ctx.query.where
          },
          data: {
            payload: data,
            version: { increment: 1 }
          }
        });

        if (updateResult.count === 0) {
          throw new Error('Record not found or not accessible');
        }

        ctx.result = { success: true, updated: updateResult.count };
        break;

      case 'delete':
        const deleteResult = await prisma.appData.deleteMany({
          where: {
            config_slug,
            config_version,
            entity_slug: entity,
            id,
            ...ctx.query.where
          }
        });

        if (deleteResult.count === 0) {
          throw new Error('Record not found or not accessible');
        }

        ctx.result = { success: true, deleted: deleteResult.count };
        break;

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    ctx.metadata.dbOperation = {
      entity,
      action,
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString()
    };
  } catch (error: any) {
    ctx.errors.push({
      code: 'DB_ERROR',
      message: error.message,
      fatal: action === 'get' || action === 'delete',
      timestamp: new Date().toISOString()
    });
  }

  return ctx;
}
