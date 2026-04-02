import fs from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';
import svgoConfig from '../config/svgo.config.mjs';

const root = path.resolve('assets-system/source');
const targetRoot = path.resolve('assets-system/build/svg');
const sourceDirs = ['logos/raw', 'icons/raw', 'visuals/raw'];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(sourceFile, targetFile) {
  const raw = await fs.readFile(sourceFile, 'utf8');
  const result = optimize(raw, {
    path: sourceFile,
    ...svgoConfig
  });
  await ensureDir(path.dirname(targetFile));
  await fs.writeFile(targetFile, result.data, 'utf8');
}

async function processDir(relativeDir) {
  const sourceDir = path.join(root, relativeDir);
  const targetDir = path.join(targetRoot, relativeDir.replace('/raw', ''));
  let entries = [];
  try {
    entries = await fs.readdir(sourceDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const written = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const nested = await processDir(path.join(relativeDir, entry.name));
      written.push(...nested);
      continue;
    }
    if (!entry.name.toLowerCase().endsWith('.svg')) {
      continue;
    }
    const sourceFile = path.join(sourceDir, entry.name);
    const targetFile = path.join(targetDir, entry.name);
    await processFile(sourceFile, targetFile);
    written.push(targetFile);
  }
  return written;
}

const writtenFiles = [];
for (const dir of sourceDirs) {
  const files = await processDir(dir);
  writtenFiles.push(...files);
}

console.log(`Optimized ${writtenFiles.length} SVG files into assets-system/build/svg`);
