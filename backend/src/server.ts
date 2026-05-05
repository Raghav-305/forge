import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { prisma, checkDatabaseConnection } from './db/prisma';
import engineRoutes from './routes/engine';
import configRoutes from './routes/configs';
import authRoutes from './routes/auth';
import csvRoutes from './routes/csv';
import eventRoutes from './routes/events';
import { authMiddleware, optionalAuthMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiter } from './middleware/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Render (and most PaaS) run behind a proxy/load balancer and will set X-Forwarded-For.
// express-rate-limit validates this header unless Express is configured to trust the proxy.
app.set('trust proxy', 1);
const frontendUrls = process.env.FRONTEND_URL?.trim();
const allowedOrigins = frontendUrls
  ? frontendUrls.split(',').map(origin => origin.trim()).filter(Boolean)
  : [];
const allowAllOrigins = allowedOrigins.includes('*') || allowedOrigins.length === 0;
const vercelPreviewOriginPattern = /^https:\/\/forge-[a-z0-9-]+-raghavbhardwaj305-8776s-projects\.vercel\.app$/i;

if (!frontendUrls) {
  console.warn('WARNING: FRONTEND_URL is not configured; CORS will allow all origins. Set FRONTEND_URL in production for tighter security.');
}

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

app.use(compression());

app.use(cors({
  origin: (origin, callback) => {
    const isVercelPreview = typeof origin === 'string' && vercelPreviewOriginPattern.test(origin);
    if (!origin || allowAllOrigins || allowedOrigins.includes(origin) || isVercelPreview) {
      return callback(null, true);
    }

    const allowedMsg = [
      ...allowedOrigins,
      'Vercel previews: https://forge-<preview>-raghavbhardwaj305-8776s-projects.vercel.app'
    ].join(', ');
    console.warn(`Blocked CORS origin: ${origin}. Allowed: ${allowedMsg}`);
    return callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', rateLimiter);

app.get('/health', async (req, res) => {
  const dbHealthy = await checkDatabaseConnection();

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
    const dbConnected = await checkDatabaseConnection();

    if (!dbConnected) {
      console.error('Failed to connect to database. Exiting...');
      process.exit(1);
    }

    await prisma.$connect();
    console.log('✅ Prisma connected');

    app.listen(PORT, () => {
      console.log(`\n🚀 API Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`⚡ Engine endpoint: POST http://localhost:${PORT}/api/engine`);
      console.log(`🔐 Auth endpoint: POST http://localhost:${PORT}/api/auth/login`);
      console.log('\n✨ Ready to accept requests\n');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, closing server...');
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
