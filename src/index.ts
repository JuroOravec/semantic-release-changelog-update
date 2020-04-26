import sr, { Options, Config as SRConfig } from 'semantic-release';

import type { Config as PluginConfig } from './types';

export const plugin = require.resolve('./plugin');

type ChangelogUpdateOptions = {
  options?: Options;
  environment?: SRConfig;
  pluginOptions?: PluginConfig;
};

export function changelogUpdate({
  options = {},
  environment = {},
  pluginOptions = {},
}: ChangelogUpdateOptions = {}) {
  const plgnOptions: PluginConfig = {
    ...pluginOptions,
  };
  const srOptions: Options = {
    dryRun: true,
    ci: false,
    branches: ['**/*'],
    ...options,
    plugins: [[plugin, plgnOptions], '@semantic-release/commit-analyzer'],
  };

  return sr(srOptions, environment);
}
