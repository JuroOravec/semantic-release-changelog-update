import { Meta, Context, Config, PrepareChangelogFn } from '../types';

import fs from 'fs';
import path from 'path';
import minimatch from 'minimatch';
import readPkgUp from 'read-pkg-up';
import semver from 'semver';

import safeReadFile from '../lib/safe-read-file';
import changelogVersion from '../lib/changelog-version';

const fsp = fs.promises;

/**
 * We want to run this script only in CI when triggered by a pull request to one
 * of the release branches (release branches defined in a semantic-release
 * config that's used on releases).
 *
 * Since any branch could be making a PR to a release branch, the branches
 * option for PR semantic-release config permits all branches.
 *
 * But we don't want to trigger the CHANGELOG update when we are making a PR
 * to another non-release branch. So we need to verify here instead that the
 * target branch is one of release branches.
 */
export default async function verifyConditions(
  pluginConfig: Config,
  context: Context,
  meta: Meta = {},
) {
  const {
    options: { dryRun },
    envCi: { prBranch, branch },
    logger,
  } = context;
  const {
    changelogFile = './CHANGELOG.md',
    pattern,
    baseBranch = branch,
    headBranch = prBranch,
    releaseBranches = meta.defaultBranches!,
    prepareChangelog,
    requireDryRun = true,
  } = pluginConfig;

  if (requireDryRun && !dryRun) {
    logger.info(
      'prepare-changelog is not intended to make changes in release ' +
        'environment. CHANGELOG will not be updated with new commits. Did ' +
        'you pass the dry run flag to semantic-release? If ' +
        'you need to run this plugin in release environment, set plugin ' +
        'option `requireDryRun` to `false`. To update CHANGELOG at release, ' +
        'use @semantic-release/changelog',
    );
    meta.verified = false;
    return;
  }

  const packageJson = await readPkgUp();
  if (!packageJson) {
    throw Error('No package.json found, cannot determine package version');
  }
  const {
    packageJson: { version: pkgVersion },
  } = packageJson;

  const chlogPath = (meta.changelogFile = path.resolve(
    process.cwd(),
    changelogFile,
  ));

  if (prepareChangelog) {
    const initChlogContent = await safeReadFile(chlogPath);
    const prepareChangelogFn =
      typeof prepareChangelog === 'string'
        ? (require('prepareChangelog') as PrepareChangelogFn)
        : prepareChangelog;
    const chlogContent = await prepareChangelogFn(
      initChlogContent,
      pluginConfig,
      context,
    );
    await fsp.writeFile(chlogPath, chlogContent, 'utf8');
  }

  let chlogVersion = await changelogVersion(chlogPath, pattern);
  if (!chlogVersion) {
    throw Error('No changelog version found from ' + chlogPath);
  }

  if (semver.gt(chlogVersion, pkgVersion)) {
    logger.info(
      `CHANGELOG version ${chlogVersion} is ahead of package.json version ` +
        `${pkgVersion}. prepare-changelog will not update CHANGELOG with ` +
        'new commits. To override this message, set plugin option ' +
        '`prepareChangelog`.',
    );
    meta.verified = false;
    return;
  }

  if (!baseBranch) {
    throw Error(
      'No base branch found. Was the plugin called in one of supported ' +
        'CI environments? If not, you must provide the plugin option ' +
        '`baseBranch`.',
    );
  }

  if (!headBranch) {
    throw Error(
      'No head branch found. Was the plugin called in one of supported ' +
        'CI environments? If not, you must provide the plugin option ' +
        '`headBranch`.',
    );
  }

  // Check if the branch we want to use as a base is a release branch in
  // release environment.
  const releaseBranchNames = releaseBranches.map((branch) =>
    typeof branch === 'string' ? branch : branch.name,
  );
  const branchIsValid =
    baseBranch &&
    releaseBranchNames.some((name) => minimatch(baseBranch, name));

  if (!branchIsValid) {
    logger.info(
      `Base branch "${baseBranch}" is not among the release branches ` +
        `${releaseBranchNames.join(', ')}. Skipping CHANGELOG update.`,
    );
    meta.verified = false;
    return;
  }

  meta.verified = true;
}
