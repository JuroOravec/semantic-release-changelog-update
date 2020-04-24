import safeReadFile from './safe-read-file';

export default async function changelogVersion(
  path: string,
  pattern: string | RegExp = /^#{1,2}\s*(?:\[)?(.+?)(?:\]|\s+|\()/mu,
) {
  const changelog = (await safeReadFile(path)) || '';

  const patternRegex =
    typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  const match = changelog.match(patternRegex);
  const version = match
    ? match.groups
      ? match.groups.version
      : match[1]
    : null;
  return version;
}
