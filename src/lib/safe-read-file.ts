import fs from 'fs';

import debug from './debug';

const fsp = fs.promises;

export default async function safeReadFile(
  path: string,
): Promise<string | null> {
  debug(`Safely opening file ${path}`);
  return fs.existsSync(path) ? await fsp.readFile(path, 'utf8') : null;
}
