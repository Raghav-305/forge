import { NextFunction, Request, Response } from 'express';

const shouldLogRequests = process.env.LOG_REQUESTS !== 'false';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  if (!shouldLogRequests || req.path === '/health') {
    return next();
  }

  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const level = res.statusCode >= 500 ? 'ERROR' : res.statusCode >= 400 ? 'WARN' : 'INFO';
    const source = req.ip ? ` ip=${req.ip}` : '';
    console.log(`[${level}] ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms${source}`);
  });

  return next();
}
