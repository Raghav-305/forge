import { EngineContext } from '../types';
import jwt from 'jsonwebtoken';

export async function authenticate(ctx: EngineContext): Promise<EngineContext> {
  const authConfig = ctx.config.auth;

  if (!authConfig?.enabled || ctx.input.public === true) {
    return ctx;
  }

  const token = ctx.user?.token || ctx.input.token || ctx.headers?.authorization?.replace('Bearer ', '');

  if (!token) {
    ctx.errors.push({
      code: 'UNAUTHORIZED',
      message: 'Authentication required',
      fatal: true,
      timestamp: new Date().toISOString()
    });
    return ctx;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const decodedPayload = typeof decoded === 'object' ? decoded : { token: decoded };
    ctx.user = { ...(ctx.user || {}), ...decodedPayload };
    ctx.metadata.authenticated = true;
  } catch (error: any) {
    ctx.errors.push({
      code: 'INVALID_TOKEN',
      message: 'Invalid or expired token',
      fatal: true,
      timestamp: new Date().toISOString()
    });
  }

  return ctx;
}
