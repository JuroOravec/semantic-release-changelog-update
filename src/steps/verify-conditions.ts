import type { Meta, Context, Config } from '../types';

import prepareBranch from '../lib/prepare-branch';
import verify from '../lib/verify';
import { prepare } from '../lib/meta';

async function verifyConditions(
  pluginConfig: Config,
  context: Context,
  meta: Meta = {},
) {
  prepare(meta);
  await verify(pluginConfig, context, meta);
  await prepareBranch(pluginConfig, context, meta);
}

export default function getVerifyConditions(meta: Meta = {}) {
  return async function verifyWrapper(pluginConfig: Config, context: Context) {
    return verifyConditions(pluginConfig, context, meta);
  };
}
