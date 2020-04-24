import { Context as SRConfig, GlobalConfig } from 'semantic-release';
import { TravisEnv } from 'env-ci';

import {
  ChangelogConfig,
  GenerateReleaseNotesConfig,
  GitConfig,
} from './plugins';

type BranchArg = string | Branch;

export type Branch = { name: string; main?: boolean; prerelease?: boolean };

export type Context = SRConfig & {
  cwd: string;
  envCi: TravisEnv;
  options: { repositoryUrl: string };
  branch: Branch;
  branches: Branch[];
  logger: SRConfig['logger'] & { info: SRConfig['logger']['log'] };
};

export type PrepareChangelogFn = (
  content: string | null,
  config: Config,
  context: Context,
) => string;

export type Config = Partial<GlobalConfig> &
  Partial<ChangelogConfig> &
  Partial<GenerateReleaseNotesConfig> &
  Partial<GitConfig> &
  Partial<{
    pattern: string | RegExp;
    baseBranch: string;
    headBranch: string;
    releaseBranches: BranchArg[];
    prepareChangelog: PrepareChangelogFn | string;
    requireDryRun: boolean;
  }>;

export type Meta = {
  verified?: boolean;
  changelogFile?: string;
  initHead?: string;
  baseBranch?: string;
  headBranch?: string;
  dummyBranch?: string;
  branch?: Branch;
  branches?: Branch[];
  defaultBranches?: BranchArg[];
};
