import execa, { Options as ExecaOptions } from 'execa';

import debug from './debug';

export type Commit = {
  hash: string;
  message: string;
};

type ArgTo = { to: string };
type ArgFrom = { from: string };
type ArgBranch = { branch: string };
type ArgRemote = { remote: string };
type ArgOnto = { onto: string };
type ArgCommit = { commit: string };
type ArgStrict = { strict: boolean };
type ArgForce = { force: boolean };
type ArgMsg = { message: string };
type ArgAllowEmpty = { allowEmpty: boolean };
type ArgParse = { parse: boolean };

type CheckoutOptions = ArgTo &
  Partial<ArgFrom> &
  Partial<ArgStrict> & { create?: boolean; existOk?: boolean };
type CherryPickOptions = ArgCommit & Partial<ArgAllowEmpty>;
type CommitOptions = ArgMsg & Partial<ArgAllowEmpty>;
type LogOptions = Partial<ArgBranch> & {
  oneline?: boolean;
  count?: number;
  format?: string;
};
type PushOptions = Partial<ArgTo> &
  Partial<ArgFrom> &
  Partial<ArgRemote> &
  Partial<ArgForce> & { delete?: string; setUpstream?: boolean };
type PullOptions = ArgTo & Partial<ArgFrom> & Partial<ArgRemote>;
type RebaseOptions = ArgOnto;
type ResetOptions = ArgTo & { hard?: boolean };
type BranchExistsOptions = ArgBranch & ArgRemote;
type LastCommitHashOptions = Partial<ArgBranch>;
type LastCommitMsgOptions = Partial<ArgBranch>;
type CopyLastCommitOptions = Partial<ArgTo> & ArgFrom;
type RemoveBranchOptions = ArgBranch &
  Partial<ArgRemote> &
  Partial<ArgStrict> & {
    fromLocal?: boolean;
    fromRemote?: boolean;
  };
type ListBranchOptions = Partial<ArgParse>;
type StashPushOptions = Partial<ArgMsg> & {
  includeUntracked?: boolean;
};

async function gitCommand(commandArgs: string[], execaOptions?: ExecaOptions) {
  debug(`Trying git command "${['git', ...commandArgs].join(' ')}"`);
  return execa('git', commandArgs, execaOptions);
}

export async function checkout(
  { create = false, to, from, strict = true, existOk = false }: CheckoutOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['checkout'];
  // Whether the args imply the user expects us to create the branch
  let shouldCreate = create || from;
  // Whether we should first try to checkout to branch without creating it
  let tryNoCreate = existOk || !shouldCreate;

  if (create || from) {
    cmdArgs.push('-b');
  }
  cmdArgs.push(to);
  if (from) {
    cmdArgs.push(from);
  }

  if (tryNoCreate) {
    try {
      await gitCommand(['checkout', to], execaOptions);
      return;
    } catch (err) {
      /** noop */
    }
  }
  if (shouldCreate) {
    // Create the branch
    try {
      await gitCommand(cmdArgs, execaOptions);
    } catch (err) {
      if (strict) throw err;
      debug(err);
    }
  }
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
  return gitCommand(cmdArgs, execaOptions);
}

export async function commit(
  { message, allowEmpty = true }: CommitOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['commit'];
  if (allowEmpty) {
    cmdArgs.push('--allow-empty');
  }
  cmdArgs.push('-m', `"${message}"`);
  return gitCommand(cmdArgs, execaOptions);
}

export async function log(
  { oneline = false, format, count, branch }: LogOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['log'];
  if (oneline) {
    cmdArgs.push('--oneline');
  }
  if (format) {
    cmdArgs.push(`--pretty=${format}`);
  }
  if (count !== undefined) {
    cmdArgs.push('-n', count.toString());
  }
  if (branch) {
    cmdArgs.push(branch);
  }
  const { stdout } = await gitCommand(cmdArgs, execaOptions);
  return stdout;
}

export async function push(
  {
    remote = 'origin',
    from,
    to,
    delete: deleteCmd,
    setUpstream = false,
    force = false,
  }: PushOptions = {},
  execaOptions?: ExecaOptions,
) {
  const mappedBranch = from ? `${from}:${to}` : to;
  const cmdArgs = ['push'];
  if (setUpstream) {
    cmdArgs.push('-u');
  }
  if (force) {
    cmdArgs.push('-f');
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
  return gitCommand(cmdArgs, execaOptions);
}

export async function pull(
  { remote = 'origin', to, from }: PullOptions,
  execaOptions?: ExecaOptions,
) {
  const mappedBranch = from ? `${from}:${to}` : to;
  return gitCommand(['pull', remote, mappedBranch], execaOptions);
}

export async function rebase(
  { onto }: RebaseOptions,
  execaOptions?: ExecaOptions,
) {
  return gitCommand(['rebase', onto], execaOptions);
}

export async function reset(
  { to, hard = false }: ResetOptions,
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['reset'];
  if (hard) {
    cmdArgs.push('--hard');
  }
  cmdArgs.push(to);
  return gitCommand(cmdArgs, execaOptions);
}

export async function status<T extends boolean>(
  { parse = false as T }: { parse?: T } = {},
  execaOptions?: ExecaOptions,
) {
  type ReturnVal = T extends true ? string[] : string;
  const { stdout } = await gitCommand(['status', '--porcelain'], execaOptions);
  if (parse) {
    if (!stdout) return [];
    return stdout.split('\n').map((change) => change.trim()) as ReturnVal;
  }
  return stdout as ReturnVal;
}

export async function stashPush(
  { includeUntracked = true, message }: StashPushOptions = {},
  execaOptions?: ExecaOptions,
) {
  const cmdArgs = ['stash', 'push'];
  if (includeUntracked) {
    cmdArgs.push('--include-untracked');
  }
  if (message) {
    cmdArgs.push('-m', message);
  }
  return gitCommand(cmdArgs, execaOptions);
}

export async function stashPop(options = {}, execaOptions?: ExecaOptions) {
  const cmdArgs = ['stash', 'pop'];
  return gitCommand(cmdArgs, execaOptions);
}

export const stash = {
  push: stashPush,
  pop: stashPop,
};

export async function branchExists(
  { branch, remote }: BranchExistsOptions,
  execaOptions?: ExecaOptions,
) {
  try {
    await gitCommand(
      ['ls-remote', '--heads', '--exit-code', remote, branch],
      execaOptions,
    );
    return true;
  } catch (err) {
    return false;
  }
}

export async function removeBranch(
  {
    branch,
    remote = 'origin',
    fromLocal = true,
    fromRemote = false,
    strict = true,
  }: RemoveBranchOptions,
  execaOptions?: ExecaOptions,
) {
  if (fromLocal) {
    try {
      await gitCommand(['branch', '-D', branch], execaOptions);
    } catch (err) {
      if (strict) throw err;
    }
  }
  if (fromRemote) {
    try {
      await push({ delete: branch, remote }, execaOptions);
    } catch (err) {
      if (strict) throw err;
    }
  }
}

export async function listBranches(
  { parse = false }: ListBranchOptions = {},
  execaOptions?: ExecaOptions,
) {
  const { stdout } = await gitCommand(['branch'], execaOptions);
  const output = parse
    ? stdout
        .split('\n')
        .map((name) =>
          name.startsWith('*') ? name.substring(1).trim() : name.trim(),
        )
    : stdout;
  return output;
}

export const branch = {
  exists: branchExists,
  remove: removeBranch,
  list: listBranches,
};

export async function currentHead(options = {}, execaOptions?: ExecaOptions) {
  const branch = await currentBranch(
    { ...options, strict: false },
    execaOptions,
  );
  return branch || (await lastCommitHash(options, execaOptions));
}

export async function currentBranch<T extends boolean>(
  { strict = true as T }: { strict?: T } = {},
  execaOptions?: ExecaOptions,
) {
  type ReturnVal = T extends true ? string : string | undefined;
  try {
    const { stderr, stdout } = await gitCommand([
      'symbolic-ref',
      '--short',
      'HEAD',
    ]);
    if (stderr) {
      throw Error(stderr);
    }
    return stdout as ReturnVal;
  } catch (err) {
    if (strict) throw Error('Not checked out to any branch.');
    return undefined as ReturnVal;
  }
}

export async function lastCommitHash(
  { branch = 'HEAD' }: LastCommitHashOptions = {},
  execaOptions?: ExecaOptions,
) {
  const { stdout } = await gitCommand(['rev-parse', '--short', branch], {
    ...execaOptions,
    stdout: undefined, // we want to extract stdout, so don't redirect it
  });
  return stdout;
}

export async function lastCommitMessage(
  { branch }: LastCommitMsgOptions = {},
  execaOptions?: ExecaOptions,
) {
  return log({ oneline: true, format: '%s', count: 1, branch }, execaOptions);
}

export async function lastCommit(
  options: LastCommitMsgOptions & LastCommitHashOptions = {},
) {
  const commit: Commit = {
    hash: await lastCommitHash(options),
    message: await lastCommitMessage(options),
  };
  return commit;
}

export async function isOnBranchHead(
  options = {},
  execaOptions?: ExecaOptions,
) {
  return Boolean(await currentBranch({ strict: false }, execaOptions));
}

export async function cherrypickLastCommit(
  { from, to }: CopyLastCommitOptions,
  execaOptions?: ExecaOptions,
) {
  // To avoid errors if this script was started in a different branch, save its
  // name so we can restore it later.
  const initHead = await currentHead({}, execaOptions);

  if (to) await checkout({ to }, execaOptions);

  // Copy the id of last commit from the 'from' branch.
  const commit = await lastCommitHash({ branch: from }, execaOptions);
  await cherryPick({ commit }, execaOptions);

  // Return to initial commit
  if (to) await checkout({ to: initHead! }, execaOptions);
}
