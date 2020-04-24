// @ts-nocheck
const envCi = require('env-ci');

const defaultConfig = require('./config');
const { branches } = require('./merge.config');

const { prBranch, branch } = envCi();

const config = {
  ...defaultConfig,
  dryRun: true,
  ci: false,
  branches: [branch, prBranch].filter(Boolean),
};

const pluginOptions = {};
if (branches !== undefined) {
  pluginOptions.releaseBranches = branches;
}

// If we're triggered by PR and merging to allowed branch, we generate and
// commit CHANGELOG.md so it can still be review before the merge.
config.plugins = [
  // Plugin calls release-notes-generator, changelog and git plugins itself,
  // so we don't have to include them here. But the plugin must be BEFORE
  // the commit-analyzer plugin.
  [process.cwd(), pluginOptions],
  '@semantic-release/commit-analyzer',
];

module.exports = config;
