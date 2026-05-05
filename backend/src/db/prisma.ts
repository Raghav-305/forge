import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const shouldLogQueries = process.env.PRISMA_QUERY_LOGS === 'true';

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: shouldLogQueries ? ['query', 'error', 'warn'] : ['error']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function checkDatabaseConnection(retries: number = 3): Promise<boolean> {
  for (let i = 0; i < retries; i++) {
    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('✅ Database connected');
      return true;
    } catch (error) {
      console.error(`Database connection attempt ${i + 1}/${retries} failed:`, error);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  console.error('❌ Database connection failed after all retries');
  return false;
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
  console.log('📴 Database disconnected');
}
