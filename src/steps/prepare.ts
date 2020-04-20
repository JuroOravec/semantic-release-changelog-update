import { ExtendedContext, Meta, ExtendedConfig } from '../types';
import {
  currentHead,
  checkout,
  push,
  lastCommitHash,
  cherryPick,
} from '../lib/git';

// We need to wait until other plugins do their job in prepare, so we have to
// trigger this at the beginning of publish
async function prepare(
  pluginConfig: ExtendedConfig,
  context: ExtendedContext,
  meta: Meta = {},
) {
  const {
    options: { repositoryUrl },
    envCi: { prBranch },
    logger,
  } = context;
  const { verified } = meta;

  if (!verified) {
    logger.info('Skipping CHANGELOG update.');
    return;
  }

  // To avoid errors if this script was started in a different branch, save its
  // name so we can restore it later.
  const initHead = (await currentHead(undefined, context)) || '';

  // Copy the last commit from the dummy branch to the PR branch. The last commit
  // is expected to be the CHANGELOG.md update.
  const chlogCommit = await lastCommitHash(undefined, context);

  await checkout({ to: prBranch }, context);
  await cherryPick({ commit: chlogCommit }, context);
  await push({ remote: repositoryUrl, to: prBranch, setUpstream: true });

  // Return to initial commit
  await checkout({ to: initHead }, context);
}

export default function getPrepare(meta: Meta = {}) {
  return async function prepareWrapper(
    pluginConfig: ExtendedConfig,
    context: ExtendedContext,
  ) {
    return prepare(pluginConfig, context, meta);
  };
}
