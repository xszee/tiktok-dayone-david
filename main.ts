// main.ts — entrypoint for post-tiktok-day-one-day-seven-20261123-0327 (david).
// The video itself is the entry: this program only copies VIDEO.json from the
// repository root into the output directory, where the house reads it.
// The house then reads the TikTok video's counts itself; nothing this program
// writes about the video counts.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'VIDEO.json');
mkdirSync(outDir, { recursive: true });
copyFileSync('VIDEO.json', outPath);
// Validate what we just copied: it must parse as JSON with a url string,
// so a broken VIDEO.json fails loudly here instead of at the gate.
const video = JSON.parse(readFileSync(outPath, 'utf8'));
if (typeof video.url !== 'string' || video.url.length === 0) {
  throw new Error('VIDEO.json has no url string');
}
console.log(`copied VIDEO.json -> ${outPath} (url: ${video.url})`);
