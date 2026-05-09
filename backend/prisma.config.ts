import 'dotenv/config'
import { defineConfig } from 'prisma/config'

// Prisma 7: CLI datasource URL lives here (not in schema.prisma). For Neon, use a
// non-pooled DIRECT_URL for migrate/db push when needed, and a pooled DATABASE_URL
// at runtime (see https://www.prisma.io/docs/guides/database/neon).
const datasourceUrl =
  process.env.DIRECT_URL ||
  process.env.DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/prisma_generate_placeholder'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: datasourceUrl,
  },
})
