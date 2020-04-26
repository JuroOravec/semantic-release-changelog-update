import type { Context, Meta, Config } from '../types';

import { removeBranch } from './git';
import { clean } from './meta';

export default async function cleanup(
  pluginConfig: Config,
  context: Context,
  meta: Meta = {},
) {
  const {
    options: { repositoryUrl },
    logger,
  } = context;
  const { dummyBranch, verified } = meta;

  if (!verified) {
    logger.info('Skipping changelog update cleanup.');
    return;
  }

  // Remove the temporary branch
  if (dummyBranch) {
    await removeBranch(
      { branch: dummyBranch, remote: repositoryUrl, fromRemote: true },
      context,
    );
  }

  // Since we don't have a way to instanciate multiple plugins, the meta object
  // is shared among all of them. So we remove the props here so the plugin can
  // be used for the second time
  clean(meta);
}
