import { EngineContext } from '../types';
import { eventBus } from '../../events/eventBus';
import { prisma } from '../../db/prisma';

export async function emitEvents(ctx: EngineContext): Promise<EngineContext> {
  const events = [];

  if (ctx.result || ctx.errors.length > 0) {
    const event = {
      event_type: `${ctx.input.entity || 'config'}.${ctx.input.action || 'execute'}`,
      source: 'engine',
      user_id: ctx.user?.id,
      config_slug: ctx.config.slug,
      entity_slug: ctx.input.entity,
      data: {
        input: ctx.input,
        resultCount: Array.isArray(ctx.result?.data || ctx.result)
          ? (ctx.result?.data || ctx.result).length
          : ctx.result
          ? 1
          : 0,
        duration: ctx.metadata.duration,
        errors: ctx.errors,
        warnings: ctx.warnings
      },
      severity: ctx.errors.length > 0 ? 'error' : ctx.warnings.length > 0 ? 'warning' : 'info',
      ip_address: ctx.metadata.ipAddress,
      user_agent: ctx.metadata.userAgent
    };

    events.push(event);

    eventBus.emit(event.event_type, event);

    const shouldPersistEvent =
      event.severity === 'error' ||
      process.env.PERSIST_ENGINE_EVENTS === 'true' ||
      (ctx.input.action === 'list' && process.env.PERSIST_ENGINE_LIST_EVENTS === 'true');

    if (shouldPersistEvent) {
      prisma.eventLog.create({ data: event }).catch(console.error);
    }

    if (event.severity === 'error' && ctx.user?.id) {
      await prisma.notification.create({
        data: {
          user_id: ctx.user.id,
          type: 'error',
          title: 'Engine Execution Error',
          message: `Error in ${event.event_type}: ${ctx.errors[0]?.message}`,
          data: { event }
        }
      });
    }
  }

  ctx.metadata.events = events;
  return ctx;
}
