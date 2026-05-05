import { EngineContext } from '../types';
import { generateFallbackResult } from './fallbackUI';

export async function safeModeHandler(ctx: EngineContext): Promise<EngineContext> {
  ctx.warnings.push({
    code: 'SAFE_MODE_ACTIVATED',
    message: 'System running in safe mode due to configuration errors',
    repairs: ctx.errors.map(e => e.message),
    timestamp: new Date().toISOString()
  });

  ctx.result = generateFallbackResult(ctx);
  ctx.errors = ctx.errors.filter(e => e.fatal === false);
  ctx.metadata.safeModeActive = true;
  ctx.metadata.fallbackUsed = true;

  return ctx;
}
