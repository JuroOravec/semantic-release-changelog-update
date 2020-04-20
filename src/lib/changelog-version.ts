import safeReadFile from './safe-read-file';

export default async function changelogVersion(
  path: string,
  pattern = /#+\s+\[(?<version>.*?)\]/u,
) {
  const changelog = (await safeReadFile(path)) || '';
  const match = changelog.match(pattern);
  const version = match
    ? match.groups
      ? match.groups.version
      : match[1]
    : null;
  return version;
}
