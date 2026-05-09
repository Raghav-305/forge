import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is required before starting the backend.');
  process.exit(1);
}
