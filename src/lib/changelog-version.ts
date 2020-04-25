import safeReadFile from './safe-read-file';

type OptionsWithPath = {
  path: string;
  content?: undefined;
  pattern?: string | RegExp;
};

type OptionsWithContent = {
  path?: undefined;
  content: string;
  pattern?: string | RegExp;
};

type ChangelogVersionOptions = OptionsWithContent | OptionsWithPath;

export default async function changelogVersion({
  path,
  content,
  pattern = /^#{1,2}\s*(?:\[)?(.+?)(?:\]|\s+|\()/mu,
}: ChangelogVersionOptions) {
  if (path && content) {
    throw Error('Ambiguous input, both path and content were given.');
  }
  const changelog = path
    ? (await safeReadFile(path)) || ''
    : (content as string);

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
