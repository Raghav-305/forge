import { Request, Response, NextFunction } from 'express';
import { eventBus } from '../events/eventBus';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${req.method} ${req.path}:`, err);

  eventBus.emit('error.handled', {
    path: req.path,
    method: req.method,
    status,
    message,
    timestamp: new Date().toISOString()
  });

  res.status(status).json({
    error: message,
    path: req.path,
    timestamp: new Date().toISOString(),
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}
