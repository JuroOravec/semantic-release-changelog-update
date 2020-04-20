import { Context, GlobalConfig } from 'semantic-release';
import { TravisEnv } from 'env-ci';

export type Branch = { name: string; main?: boolean; prerelease?: boolean };

export type ExtendedContext = Context & {
  cwd: string;
  envCi: TravisEnv;
  options: { repositoryUrl: string };
  branch: Branch;
  branches: Branch[];
  logger: Context['logger'] & { info: Context['logger']['log'] };
};

export type ExtendedConfig = GlobalConfig & {
  message?: string;
  releaseBranches: Branch[];
};

export type Meta = {
  verified?: boolean;
  changelogFile?: string;
  dummyBranch?: string;
  branch?: Branch;
  branches?: Branch[];
  defaultBranches?: Branch[];
};
