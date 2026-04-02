import fs from 'node:fs/promises';
import path from 'node:path';
import StyleDictionary from 'style-dictionary';
import config from '../config/style-dictionary.config.mjs';

const sd = new StyleDictionary(config);

await sd.buildAllPlatforms();

const sourcePath = path.resolve('assets-system/source/tokens/design-tokens.json');
const tsPath = path.resolve('assets-system/build/ts/tokens.ts');
const raw = await fs.readFile(sourcePath, 'utf8');
const sourceTokens = JSON.parse(raw);

const unwrap = (node) => {
  if (node && typeof node === 'object' && !Array.isArray(node)) {
    if (Object.keys(node).length === 1 && 'value' in node) {
      return node.value;
    }
    return Object.fromEntries(Object.entries(node).map(([key, value]) => [key, unwrap(value)]));
  }
  return node;
};

const tsModule = `export const opitaTokens = ${JSON.stringify(unwrap(sourceTokens), null, 2)} as const;\n`;
await fs.writeFile(tsPath, tsModule, 'utf8');

console.log('Built token outputs into assets-system/build');
