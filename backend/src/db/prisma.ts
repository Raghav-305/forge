import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const shouldLogQueries = process.env.PRISMA_QUERY_LOGS === 'true';

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: shouldLogQueries ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
    errorFormat: 'pretty'
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

prisma.$on('error', (event) => {
  console.error('[Prisma] error event:', event.message || event);
});

prisma.$on('warn', (event) => {
  console.warn('[Prisma] warning event:', event.message || event);
});

if (process.env.PRISMA_INFO_LOGS === 'true') {
  prisma.$on('info', (event) => {
    console.info('[Prisma] info event:', event.message || event);
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
