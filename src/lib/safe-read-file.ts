import fs from 'fs';

const fsp = fs.promises;

export default async function safeReadFile(
  path: string,
): Promise<string | null> {
  return fs.existsSync(path) ? await fsp.readFile(path, 'utf8') : null;
}
