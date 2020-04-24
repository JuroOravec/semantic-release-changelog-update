import path from 'path';
// @ts-ignore
import releaseNoteGenerator from '@semantic-release/release-notes-generator';
// @ts-ignore
import changelogPlugin from '@semantic-release/changelog';
// @ts-ignore
import gitPlugin from '@semantic-release/git';

import { Context, Config } from '../types';
import cleanup from '../lib/cleanup';
import { checkout, cherrypickLastCommit, push, removeBranch } from '../lib/git';
import { Meta } from '../types';

async function generateNotes(
  pluginConfig: Config,
  context: Context,
  meta: Meta,
) {
  const {
    cwd,
    options: { repositoryUrl },
    logger,
  } = context;
  const {
    message = 'chore(changelog): update changelog to ${nextRelease.version} ' +
      '[skip ci]\n\n${nextRelease.notes}',
  } = pluginConfig;
  const {
    verified,
    changelogFile = '',
    initHead = '',
    headBranch = '',
    branch,
    branches,
  } = meta;

  if (!verified) {
    logger.info(
      'Skipping CHANGELOG update (step verifyConditions did not pass).',
    );
    return;
  }

  // @ts-ignore
  if (meta.done) {
    return context.nextRelease?.notes;
  }

  // If we got here, we're in dry run environment and the conditions are
  // verified. Since any steps including `prepare` and beyond are not run on
  // dry run, we need to:
  // 1) Run `generateNotes` steps to get that data, since they become available
  // only in `prepare` step and later.
  // 2) We need to run `prepare` steps to generate and commit the CHANGELOG.
  if (!context.nextRelease) throw Error('No next release found');
  logger.info('Running @semantic-release/generate-release-notes.generateNotes');
  context.nextRelease.notes = await releaseNoteGenerator.generateNotes(
    pluginConfig,
    context,
  );
  logger.info('Running @semantic-release/changelog.prepare');
  await changelogPlugin.prepare({ ...pluginConfig, changelogFile }, context);

  logger.info('Running @semantic-release/git.prepare');
  await gitPlugin.prepare(
    {
      ...pluginConfig,
      assets: [path.relative(cwd, changelogFile)],
      message,
    },
    // git plugin takes the info on the branch to commit and push to from
    // context, so we must convince it to push to the dummy branch
    { ...context, branch, branches },
  );
  const changelogBranch = 'temp/semantic-release/changelog-update';
  await checkout({ to: changelogBranch, create: true });

  // Copy the commit with updated chengelog to head/pr branch
  logger.info('Copying changelog commit');
  await checkout({ to: headBranch }, context);
  await cherrypickLastCommit({ from: changelogBranch });
  await push({ remote: repositoryUrl, to: headBranch, setUpstream: true });

  // Cleanup
  logger.info('Cleaning up');
  await checkout({ to: initHead }, context);
  await removeBranch({ branch: changelogBranch });
  await cleanup(pluginConfig, context, meta);
  logger.info('Done');

  // For some reason the generateNotes step is run twice in tests, so this is
  // used to prevent that
  // @ts-ignore
  meta.done = 1;

  return context.nextRelease.notes;
}

export default function getGenerateNotes(meta: Meta = {}) {
  return async function generateNotesWrapper(
    pluginConfig: Config,
    context: Context,
  ) {
    return generateNotes(pluginConfig, context, meta);
  };
}
