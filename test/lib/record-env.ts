import { lastCommit, branchExists, status } from '../../src/lib/git';

import * as chlog from '../fixtures/changelog';
import { Commit } from '../../src/lib/git';

export interface BranchInfo {
  name?: string;
  commit?: Commit;
  changes?: string[];
  exists?: boolean;
  changelog?: {
    content: string;
    contentInitial: string;
  };
}

export interface RemoteInfo {
  name?: string;
  url?: string;
}

export enum SnapshotTypes {
  before = 'before',
  after = 'after',
}

export type Snapshot = {
  branch?: {
    [key: string]: BranchInfo;
  };
  remote?: {
    [key: string]: RemoteInfo;
  };
  changelogEnv?: chlog.Env;
};

export type Env = {
  [K in SnapshotTypes]?: Snapshot;
} & {
  result?: any;
};

export interface RequiredEnvDefaults extends Env {
  before: {
    remote: { default: RemoteInfo & { url: string } };
    changelog: chlog.Env;
    branch: {
      head: BranchInfo & { name: string };
      base: BranchInfo & { name: string };
      other: BranchInfo & { name: string };
    };
  };
}

export async function recordEnvironment(
  fn: () => {},
  envDefaults: RequiredEnvDefaults & Env,
) {
  const env: Env & RequiredEnvDefaults = {
    before: {},
    after: {},
    ...envDefaults,
  };

  env.result = await fn();

  const remote = env.before.remote.default.url;
  const baseBranch = env.before.branch.base.name;
  const headBranch = env.before.branch.head.name;
  const otherBranch = env.before.branch.other.name;

  env.after = {
    branch: {
      base: {
        commit: await lastCommit({ branch: baseBranch }),
      },
      current: {
        changes: await status({ parse: true }),
      },
      head: {
        commit: await lastCommit({
          branch: headBranch,
        }),
        exists: await branchExists({
          remote,
          branch: headBranch,
        }),
        changelog: await chlog.getContent({
          branch: headBranch,
          ...env.before.changelog,
        }),
      },
      'head^': {
        commit: await lastCommit({
          branch: `${headBranch}^`,
        }),
      },
      tempHead: {
        exists: await branchExists({
          remote,
          branch: `temp/semantic-release/${headBranch}`,
        }),
      },
      other: {
        commit: await lastCommit({ branch: otherBranch }),
      },
    },
  };
  return env;
}
