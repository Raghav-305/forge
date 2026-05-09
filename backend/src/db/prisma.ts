import 'dotenv/config'
import { createRequire } from 'module'
import { PrismaNeon } from '@prisma/adapter-neon'

const require = createRequire(import.meta.url)
const { PrismaClient } = require('../generated/prisma')

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to start the backend.')
}

const adapter = new PrismaNeon({
  connectionString: databaseUrl,
})

const globalForPrisma = global as unknown as { prisma: typeof PrismaClient };

const prismaLogLevels =
  process.env.NODE_ENV === 'development' || process.env.PRISMA_QUERY_LOGS === 'true'
    ? (['query', 'error', 'warn'] as const)
    : (['error'] as const);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: [...prismaLogLevels],
    errorFormat: 'pretty'
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

const prismaAny = prisma as any;

prismaAny.$on('error', (event: any) => {
  console.error('[Prisma] error event:', event?.message || event);
});

prismaAny.$on('warn', (event: any) => {
  console.warn('[Prisma] warning event:', event?.message || event);
});

if (process.env.PRISMA_INFO_LOGS === 'true') {
  prismaAny.$on('info', (event: any) => {
    console.info('[Prisma] info event:', event?.message || event);
  });
}

export async function checkDatabaseConnection(
  retries: number = 3,
  options: { logSuccess?: boolean } = {}
): Promise<boolean> {
  for (let i = 0; i < retries; i++) {
    try {
      await prisma.$queryRaw`SELECT 1`;
      if (options.logSuccess) {
        console.log('Database connected');
      }
      return true;
    } catch (error) {
      console.error(`Database connection attempt ${i + 1}/${retries} failed:`, error);
      try {
        await prisma.$disconnect();
      } catch (disconnectError) {
        console.warn('Failed to disconnect Prisma after a failed health check:', disconnectError);
      }
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  console.error('Database connection failed after all retries');
  return false;
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
  console.log('Database disconnected');
}
