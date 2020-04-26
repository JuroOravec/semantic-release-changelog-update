/**
 * Options passed to `@semantic-release/git`
 *
 * See `@semantic-release/git`
 *
 * Generated from v9.0.0
 */
export type GitConfig = {
  /**
   * The message for the release commit.
   *
   * See `@semantic-release/git` option `message`
   */
  message: string;
};

/**
 * Options passed to `@semantic-release/git`
 *
 * See `@semantic-release/git`
 *
 * Generate from v5.0.1
 */
export type ChangelogConfig = {
  /**
   * File path of the changelog.
   *
   * See `@semantic-release/git` option `changelogFile`
   */
  changelogFile: string;
  /**
   * Title of the changelog file (first line of the file).
   *
   * See `@semantic-release/git` option `changelogTitle`
   */
  changelogTitle: string;
};

/**
 * Options passed to `@semantic-release/generate-release-notes`
 *
 * See `@semantic-release/generate-release-notes`
 *
 * Generated from v9.0.1
 */
export type GenerateReleaseNotesConfig = {
  /**
   * conventional-changelog preset.
   *
   * See `@semantic-release/generate-release-notes` option `preset`
   */
  preset: string;
  /**
   * NPM package name of a custom conventional-changelog preset.
   *
   * See `@semantic-release/generate-release-notes` option `config`
   */
  config: string;
  /**
   * Additional conventional-commits-parser options that will extends the ones
   * loaded by preset or config. This is convenient to use a
   * conventional-changelog preset with some customizations without having to
   * create a new module.
   *
   * See `@semantic-release/generate-release-notes` option `parserOpts`
   */
  parserOpts: any;
  /**
   * Additional conventional-commits-writer options that will extends the ones
   * loaded by preset or config. This is convenient to use a
   * conventional-changelog preset with some customizations without having to
   * create a new module.
   *
   * See `@semantic-release/generate-release-notes` option `writerOpts`
   */
  writerOpts: any;
  /**
   * The host used to generate links to issues and commits. See
   * conventional-changelog-writer#host.
   *
   * See `@semantic-release/generate-release-notes` option `host`
   */
  host: string;
  /**
   * Whether to include a link to compare changes since previous release in the
   * release note.
   *
   * See `@semantic-release/generate-release-notes` option `linkCompare`
   */
  linkCompare: boolean;
  /**
   * Whether to include a link to issues and commits in the release note. See
   * conventional-changelog-writer#linkreferences.
   *
   * See `@semantic-release/generate-release-notes` option `linkReferences`
   */
  linkReferences: boolean;
  /**
   * Keyword used to generate commit links (formatted as
   * <host>/<owner>/<repository>/<commit>/<commit_sha>). See
   * conventional-changelog-writer#commit.
   *
   * See `@semantic-release/generate-release-notes` option `commit`
   */
  commit: string;
  /**
   * Keyword used to generate issue links (formatted as
   * <host>/<owner>/<repository>/<issue>/<issue_number>). See
   * conventional-changelog-writer#issue.
   *
   * See `@semantic-release/generate-release-notes` option `issue`
   */
  issue: string;
  /**
   * Additional configuration passed to the conventional-changelog preset. Used
   * for example with conventional-changelog-conventionalcommits.
   *
   * See `@semantic-release/generate-release-notes` option `presetConfig`
   */
  presetConfig: any;
};

/**
 * Options passed to `@semantic-release/commit-analyzer`
 *
 * See `@semantic-release/commit-analyzer`
 *
 * Generated from v8.0.1
 */
export type CommitAnalyzerConfig = {
  /**
   * conventional-changelog preset.
   *
   * See `@semantic-release/commit-analyzer` option `preset`
   */
  preset: string;
  /**
   * NPM package name of a custom conventional-changelog preset.
   *
   * See `@semantic-release/commit-analyzer` option `config`
   */
  config: string;
  /**
   * Additional conventional-commits-parser options that will extends the ones
   * loaded by preset or config. This is convenient to use a
   * conventional-changelog preset with some customizations without having to
   * create a new module.
   *
   * See `@semantic-release/commit-analyzer` option `parserOpts`
   */
  parserOpts: any;
  /**
   * Additional conventional-commits-writer options that will extends the ones
   * loaded by preset or config. This is convenient to use a
   * conventional-changelog preset with some customizations without having to
   * create a new module.
   *
   * See `@semantic-release/commit-analyzer` option `writerOpts`
   */
  writerOpts: any;
  /**
   * Additional configuration passed to the conventional-changelog preset. Used
   * for example with conventional-changelog-conventionalcommits.
   *
   * See `@semantic-release/commit-analyzer` option `presetConfig`
   */
  presetConfig: any;
};
