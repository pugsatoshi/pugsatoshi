import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', '..', 'assets');
const dst = join(here, '..', 'public', 'assets');

if (!existsSync(src)) {
  console.warn(`[sync-assets] source not found: ${src}`);
  process.exit(0);
}

mkdirSync(dst, { recursive: true });
cpSync(src, dst, { recursive: true });
console.log(`[sync-assets] ${src} -> ${dst}`);
