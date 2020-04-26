import type { Context, Meta, Config } from '../types';
import { currentHead, checkout, push, pull, rebase, branchExists } from './git';

/**
 * Prepare creates and checks out to dummyBranch.
 * and adds data to meta
 */
export default async function prepareBranch(
  pluginConfig: Config,
  context: Context,
  meta: Meta = {},
) {
  const {
    options: { repositoryUrl },
    envCi: { prBranch, branch },
    logger,
  } = context;
  // Branches were verified at `verify` step and must be string here
  const {
    baseBranch = branch as string,
    headBranch = prBranch as string,
  } = pluginConfig;

  if (!meta.verified) {
    logger.info(
      'Skipping CHANGELOG update (step verifyConditions did not pass).',
    );
    return;
  }

  meta.baseBranch = baseBranch;
  meta.headBranch = headBranch;

  // To avoid errors if this script was started in a different branch, save its
  // name so we can restore it later.
  meta.initHead = await currentHead({}, context);

  // Prepare the branch that will have commits from both base and head branches
  await checkout({ to: headBranch, create: true, existOk: true });
  await pull(
    {
      from: headBranch,
      to: headBranch,
      remote: repositoryUrl,
    },
    context,
  );

  // Make a dummy branch from the pr/head branch
  const dummyBranch = (meta.dummyBranch = `temp/semantic-release/${headBranch}`);

  if (await branchExists({ branch: dummyBranch, remote: repositoryUrl })) {
    throw Error(`Branch ${dummyBranch} already exists on remote.`);
  }
  // Apply the changes from head branch (e.g. a PR branch) to the dummy target
  // branch, so we have a branch with all changes on master since the last
  // release + the head branch changes.
  await checkout(
    {
      to: dummyBranch,
      from: headBranch,
    },
    context,
  );

  await rebase({ onto: baseBranch }, context);

  // semantic-release, which we use to get and format the CHANGELOG, verifies if
  // the target branch exists by fetching it from remote, so we need to set the
  // dummy branch on remote.
  await push(
    {
      to: dummyBranch,
      remote: repositoryUrl,
      setUpstream: true,
    },
    context,
  );

  // Make branch object that could be recognized by semantic-release
  const dummyBranchObj = { ...context.branch, name: dummyBranch, main: false };
  meta.branches = meta.branches || context.branches || [];
  meta.branches.push(dummyBranchObj);
  meta.branch = dummyBranchObj;
}
