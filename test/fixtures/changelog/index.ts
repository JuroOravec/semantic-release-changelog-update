import fs, { promises as fsp } from 'fs';
import path from 'path';
import readPkgUp from 'read-pkg-up';
import rimraf from 'rimraf';

import { currentHead, checkout } from '../../../src/lib/git';

export type Env = {
  file: string;
  initialFile: string;
  tempDirRoot: string;
};

const templates = {
  future: 'test/fixtures/changelog/CHANGELOG.future.md',
  current: 'test/fixtures/changelog/CHANGELOG.current.md',
  past: 'test/fixtures/changelog/CHANGELOG.past.md',
};

export type TemplateTypes = keyof typeof templates;

const packageVersion = async () => {
  const { packageJson } = (await readPkgUp()) || {};
  if (!packageJson) {
    console.warn('No package.json found, defaulting to 1.0.0');
    return '1.0.0';
  }
  return packageJson.version;
};

type ReplacementArg = Partial<
  { [K in keyof path.ParsedPath]: (parsedPath: path.ParsedPath) => string }
>;

/**
 * Filepath => 'path/to/my/filename.txt'
 * replacements => {
 *   name: '${filename}_is_awesome'
 *   ext: '${ext}2'
 * }
 * Result => path/to/my/filename_is_awesome.txt2
 */
const renamePath = (filepath: string, replacements: ReplacementArg = {}) => {
  const pathParts = path.parse(filepath);
  const updatedParts = Object.entries(replacements).reduce((obj, [key, fn]) => {
    const typedKey = key as keyof path.ParsedPath;
    obj[typedKey] = fn!({ ...pathParts });
    return obj;
  }, {} as path.ParsedPath);
  const finalParts = {
    ...pathParts,
    ...updatedParts,
  };
  const { name, ext } = finalParts;
  if (!replacements.base) {
    finalParts.base = ext ? `${name}${ext}` : name;
  }
  return path.format(finalParts);
};

const lastExistingPath = (testedPath: string) => {
  let currPath = testedPath;
  while (!fs.existsSync(currPath)) {
    currPath = path.dirname(currPath);
  }
  return currPath;
};

const isPathDescendant = (
  childPath: string,
  parentPath: string = process.cwd(),
  { allowSelf = false } = {},
) => {
  const relPath = path.relative(parentPath, childPath);
  return Boolean((relPath || allowSelf) && !relPath.startsWith('..'));
};

const getTempDirRoot = (tempPath: string) => {
  const existingPath = lastExistingPath(tempPath);
  const tempDirRoot = path.relative(existingPath, tempPath).split(path.sep)[0];
  const root = path.resolve(existingPath, tempDirRoot);
  return root;
};

/**
 * Create subdirs and changelog files based on the types
 */
export const prepare = async (type: TemplateTypes, destDir = 'temp/test') => {
  // Prepare destination
  const changelogPath = path.resolve(destDir, 'CHANGELOG.md');
  const initialChangelogPath = renamePath(changelogPath, {
    name: ({ name }) => `${name}.init`,
  });

  // Remember what paths were created
  const createdDirRoot = getTempDirRoot(destDir);
  await fsp.mkdir(destDir, { recursive: true });

  // Prepare template, and replace mentions of `version` with actual version
  const templatePath = templates[type];
  const currVersion = await packageVersion();
  const template = await fsp.readFile(templatePath, 'utf8');
  const content = template.replace(/<%=\s*version\s*%>/giu, currVersion);

  // the init version will be used for comparison
  await fsp.writeFile(changelogPath, content, {
    // ensure writing to clean file
    flag: fs.existsSync(changelogPath) ? 'w' : 'a',
  });
  await fsp.writeFile(initialChangelogPath, content, {
    flag: fs.existsSync(initialChangelogPath) ? 'w' : 'a',
  });

  return {
    file: changelogPath,
    initialFile: initialChangelogPath,
    tempDirRoot: createdDirRoot,
  } as Env;
};

/**
 * Reset the files to the starting state, so other test can begin
 */
export const reset = async ({ file, initialFile }: Env) => {
  const initialContent = await fsp.readFile(initialFile, 'utf8');
  await fsp.writeFile(file, initialContent, 'utf8');
};

/**
 * Restore the system to the initial state, as it was before tests
 */
export const restore = async ({ file, initialFile, tempDirRoot }: Env) => {
  if (tempDirRoot) {
    const allowedPath = path.resolve(process.cwd(), 'temp');
    if (!isPathDescendant(tempDirRoot, allowedPath, { allowSelf: true })) {
      throw Error('tempDirRoot must be inside the "./temp" directory.');
    }
    await new Promise((resolve, reject) => {
      rimraf(tempDirRoot, (err) => (err ? reject(err) : resolve()));
    });
  }
  if (!tempDirRoot || !isPathDescendant(file, tempDirRoot)) {
    await fsp.unlink(file);
  }
  if (!tempDirRoot || !isPathDescendant(initialFile, tempDirRoot)) {
    await fsp.unlink(initialFile);
  }
};

export async function getContent({
  branch,
  file,
  initialFile,
}: {
  branch: string;
  file: string;
  initialFile: string;
}) {
  const currBranch = await currentHead();
  await checkout({ to: branch });
  const changelogData = {
    content: await fsp.readFile(file, 'utf8'),
    contentInitial: await fsp.readFile(initialFile, 'utf8'),
  };
  await checkout({ to: currBranch! });

  return changelogData;
}
