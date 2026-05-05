import { EngineContext } from '../types';

export async function maskSensitive(ctx: EngineContext): Promise<EngineContext> {
  const sensitiveFields = ctx.config.sensitiveFields || ['password', 'token', 'secret', 'apiKey'];

  if (ctx.result) {
    const originalSize = JSON.stringify(ctx.result).length;
    ctx.result = maskData(ctx.result, sensitiveFields);
    const maskedSize = JSON.stringify(ctx.result).length;

    ctx.metadata.masking = {
      applied: true,
      fields: sensitiveFields,
      originalSize,
      maskedSize
    };
  }

  return ctx;
}

function maskData(data: any, sensitiveFields: string[]): any {
  if (!data) return data;

  if (Array.isArray(data)) {
    return data.map(item => maskData(item, sensitiveFields));
  }

  if (typeof data === 'object') {
    const masked = { ...data };
    for (const field of sensitiveFields) {
      if (masked[field]) {
        masked[field] = '••••••••';
      }
    }

    for (const key in masked) {
      if (typeof masked[key] === 'object') {
        masked[key] = maskData(masked[key], sensitiveFields);
      }
    }
    return masked;
  }

  return data;
}
