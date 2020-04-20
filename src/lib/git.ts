import execa, { Options as ExecaOptions } from 'execa';

type ArgTo = { to: string };
type ArgFrom = { from: string };
type ArgBranch = { branch: string };
type ArgRemote = { remote: string };
type ArgOnto = { onto: string };
type ArgCommit = { commit: string };

type CheckoutOptions = ArgTo & Partial<ArgFrom> & { create?: boolean };
type PushOptions = Partial<ArgTo> &
  Partial<ArgFrom> &
  Partial<ArgRemote> & { delete?: string; setUpstream?: boolean };
type PullOptions = ArgTo & Partial<ArgFrom> & Partial<ArgRemote>;
type RebaseOptions = ArgOnto;
type CherryPickOptions = ArgCommit & { allowEmpty?: boolean };
type BranchExistsOptions = ArgBranch & ArgRemote;
type LastCommitHashOptions = Partial<ArgBranch>;

export async function checkout(
  { create = false, to, from }: CheckoutOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['checkout'];
  if (create || from) {
    cmdArgs.push('-b');
  }
  cmdArgs.push(to);
  if (from) {
    cmdArgs.push(from);
  }
  return execa('git', cmdArgs, execaOptions);
}

export async function push(
  {
    remote = 'origin',
    from,
    to,
    delete: deleteCmd,
    setUpstream = false,
  }: PushOptions = {},
  execaOptions?: ExecaOptions,
) {
  const mappedBranch = from ? `${from}:${to}` : to;
  const cmdArgs = ['push'];
  if (setUpstream) {
    cmdArgs.push('-u');
  }
  if (remote) {
    cmdArgs.push(remote);
    if (mappedBranch) {
      cmdArgs.push(mappedBranch);
    }
  }
  if (deleteCmd) {
    cmdArgs.push('--delete', deleteCmd);
  }
  return execa('git', cmdArgs, execaOptions);
}

export async function pull(
  { remote = 'origin', to, from }: PullOptions,
  execaOptions?: ExecaOptions,
) {
  const mappedBranch = from ? `${from}:${to}` : to;
  return execa('git', ['pull', remote, mappedBranch], execaOptions);
}

export async function rebase(
  { onto }: RebaseOptions,
  execaOptions?: ExecaOptions,
) {
  return execa('git', ['rebase', onto], execaOptions);
}

export async function cherryPick(
  { commit, allowEmpty = false }: CherryPickOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['cherry-pick'];
  if (allowEmpty) {
    cmdArgs.push('--allow-empty');
  }
  cmdArgs.push(commit);
  return execa('git', cmdArgs, execaOptions);
}

export async function branchExists(
  { branch, remote }: BranchExistsOptions,
  execaOptions?: ExecaOptions,
) {
  try {
    await execa(
      'git',
      ['ls-remote', '--heads', '--exit-code', remote, branch],
      execaOptions,
    );
    return true;
  } catch (err) {
    return false;
  }
}

export async function currentHead(options = {}, execaOptions?: ExecaOptions) {
  return isDetachedMode(options, execaOptions)
    ? lastCommitHash(options, execaOptions)
    : getBranchName(options, execaOptions);
}

export async function getBranchName(options = {}, execaOptions?: ExecaOptions) {
  const { stdout } = await execa('git', ['branch'], execaOptions);
  const match = stdout.match(/^\* (.*)\n/u);
  return match ? match[1] : undefined;
}

export async function lastCommitHash(
  { branch = 'HEAD' }: LastCommitHashOptions = {},
  execaOptions?: ExecaOptions,
) {
  const { stdout } = await execa('git', ['rev-parse', '--short', branch], {
    ...execaOptions,
    stdout: undefined, // we want to extract stdout, so don't redirect it
  });
  return stdout;
}

export async function isDetachedMode(
  options = {},
  execaOptions?: ExecaOptions,
) {
  try {
    await execa('git', ['symbolic-ref', '--short', '-q', 'HEAD'], execaOptions);
    return false;
  } catch (err) {
    return true;
  }
}
