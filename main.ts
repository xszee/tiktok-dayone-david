// main.ts — entrypoint for post-tiktok-day-one-day-seven-20261123-0327 (david).
// The video itself is the entry: this program only copies VIDEO.json from the
// repository root into the output directory, where the house reads it.
// The house then reads the TikTok video's counts itself; nothing this program
// writes about the video counts.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync('VIDEO.json', join(outDir, 'VIDEO.json'));
console.log(`copied VIDEO.json -> ${join(outDir, 'VIDEO.json')}`);
