import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { prisma, checkDatabaseConnection } from './db/prisma.js';
import engineRoutes from './routes/engine.js';
import configRoutes from './routes/configs.js';
import authRoutes from './routes/auth.js';
import csvRoutes from './routes/csv.js';
import eventRoutes from './routes/events.js';
import { authMiddleware, optionalAuthMiddleware } from './middleware/auth.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import { requestLogger } from './middleware/requestLogger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1);

function normalizeOrigin(origin: string): string {
  return origin.trim().replace(/\/+$/, '');
}

const frontendUrls = process.env.FRONTEND_URL?.trim();
const configuredOrigins = frontendUrls
  ? frontendUrls.split(',').map(normalizeOrigin).filter(Boolean)
  : [];
const defaultAllowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:8080',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:8080'
];
const allowedOrigins = new Set([...defaultAllowedOrigins, ...configuredOrigins]);
const allowAllOrigins = allowedOrigins.has('*') || process.env.CORS_ALLOW_ALL === 'true';
const allowVercelPreviews = process.env.ALLOW_VERCEL_PREVIEWS !== 'false';
const allowedOriginPatterns = [
  /^http:\/\/localhost:\d+$/i,
  /^http:\/\/127\.0\.0\.1:\d+$/i,
  ...(allowVercelPreviews ? [/^https:\/\/[a-z0-9-]+\.vercel\.app$/i] : [])
];

if (!frontendUrls) {
  console.warn('WARNING: FRONTEND_URL is not configured; only localhost and Vercel preview origins are enabled by default.');
}

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

app.use(compression());

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    const normalizedOrigin = typeof origin === 'string' ? normalizeOrigin(origin) : origin;
    const isPatternAllowed =
      typeof normalizedOrigin === 'string' &&
      allowedOriginPatterns.some(pattern => pattern.test(normalizedOrigin));

    if (!normalizedOrigin || allowAllOrigins || allowedOrigins.has(normalizedOrigin) || isPatternAllowed) {
      return callback(null, true);
    }

    const allowedMsg = [
      ...Array.from(allowedOrigins).filter(item => item !== '*'),
      ...(allowVercelPreviews ? ['Vercel previews: https://<deployment>.vercel.app'] : [])
    ].join(', ');
    console.warn(`Blocked CORS origin: ${normalizedOrigin}. Allowed: ${allowedMsg}`);
    const error = new Error(`Origin ${normalizedOrigin} is not allowed by CORS`);
    (error as any).status = 403;
    return callback(error);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(requestLogger);

app.use('/api', rateLimiter);

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'config-canvas-backend',
    health: '/health'
  });
});

let healthCache: { checkedAt: number; dbHealthy: boolean } | null = null;
const HEALTH_CACHE_MS = 30_000;

app.get('/health', async (_req, res) => {
  const now = Date.now();
  if (!healthCache || now - healthCache.checkedAt > HEALTH_CACHE_MS) {
    healthCache = {
      checkedAt: now,
      dbHealthy: await checkDatabaseConnection(1)
    };
  }

  const dbHealthy = healthCache.dbHealthy;
  res.json({
    status: dbHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      database: dbHealthy ? 'connected' : 'disconnected',
      api: 'running',
      version: '2.0.0'
    }
  });
});

app.use('/api/engine', optionalAuthMiddleware);
app.use('/api/configs', optionalAuthMiddleware);
app.use('/api/csv', authMiddleware);
app.use('/api/events', authMiddleware);
app.use('/api/auth', authRoutes);

app.use('/api/engine', engineRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/csv', csvRoutes);
app.use('/api/events', eventRoutes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
    timestamp: new Date().toISOString()
  });
});

async function startServer() {
  try {
    const dbConnected = await checkDatabaseConnection(5, { logSuccess: true });

    if (!dbConnected) {
      console.error('Failed to connect to database. Exiting...');
      process.exit(1);
    }

    await prisma.$connect();
    console.log('Prisma connected');

    app.listen(PORT, () => {
      console.log(`API Server running on http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Engine endpoint: POST http://localhost:${PORT}/api/engine`);
      console.log(`Auth endpoint: POST http://localhost:${PORT}/api/auth/login`);
      console.log('Ready to accept requests');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
