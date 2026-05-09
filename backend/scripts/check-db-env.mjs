import 'dotenv/config';

if (!process.env.DIRECT_URL && !process.env.DATABASE_URL) {
  console.error('DATABASE_URL or DIRECT_URL is required before running Prisma database commands.');
  process.exit(1);
}
