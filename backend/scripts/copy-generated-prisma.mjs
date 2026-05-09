import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const backendDir = resolve(scriptDir, '..');
const source = resolve(backendDir, 'src/generated/prisma');
const target = resolve(backendDir, 'dist/generated/prisma');

if (!existsSync(source)) {
  console.error(`Generated Prisma client not found at ${source}`);
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });
