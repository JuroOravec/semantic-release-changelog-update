import { push } from './git';
import { ExtendedContext, Meta, ExtendedConfig } from '../types';

export default async function cleanup(
  pluginConfig: ExtendedConfig,
  context: ExtendedContext,
  meta: Meta = {},
) {
  const {
    options: { repositoryUrl },
    logger,
  } = context;
  const { dummyBranch, verified } = meta;

  if (!verified) {
    logger.info('Skipping prepare-changelog cleanup.');
    return;
  }

  // Remove the temporary branch
  await push({ delete: dummyBranch, remote: repositoryUrl }, context);
}
