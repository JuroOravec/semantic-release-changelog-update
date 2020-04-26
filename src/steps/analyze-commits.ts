// @ts-ignore
import commitAnalyzer from '@semantic-release/commit-analyzer';

import type { Context, Config, Meta } from '../types';

import cleanup from '../lib/cleanup';

/**
 * Wrapper around @semantic-release/commit-analyzer so we can remove the
 * temporary branches if no releaseType is determined (because then the
 * pipeline ends with the analyze commits step)
 */
async function analyzeCommits(
  pluginConfig: Config,
  context: Context,
  meta: Meta = {},
) {
  const releaseType = await commitAnalyzer.analyzeCommits(
    pluginConfig,
    context,
  );
  if (!releaseType) {
    await cleanup(pluginConfig, context, meta);
  }
  return releaseType as string | null;
}

export default function getAnalyzeCommits(meta: Meta = {}) {
  return async function analyzeCommitsWrapper(
    pluginConfig: Config,
    context: Context,
  ) {
    return analyzeCommits(pluginConfig, context, meta);
  };
}
