# Backend for Config Canvas

This backend is a production-ready, config-driven app generator backend built with Express, Prisma, PostgreSQL, and TypeScript.

## Setup

1. Copy `.env.example` to `.env` and update your values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client and build:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Docker

```bash
npm run docker:build
npm run docker:up
```

## API

- `POST /api/engine` - unified engine endpoint
- `POST /api/auth/login` - login
- `POST /api/auth/register` - register
- `GET /api/configs` - list configs
- `POST /api/configs` - create config
- `POST /api/csv/analyze` - analyze CSV file
- `POST /api/csv/import` - import CSV
- `GET /api/events` - event logs

## Notes

- Ensure PostgreSQL is running and `DATABASE_URL` is configured.
- The engine uses config-driven entities, versioning, and safe mode.
