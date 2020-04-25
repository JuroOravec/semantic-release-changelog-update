import {
  checkout,
  reset as gitReset,
  push,
  removeBranch,
  commit,
  lastCommit,
  currentHead,
} from '../../../src/lib/git';
import { Commit } from '../../../src/lib/git';

type ResetBranchesOptions = {
  remote: string;
  branch: string;
  commit: string;
}[];

export async function reset(branches: ResetBranchesOptions) {
  const initHead = await currentHead();
  for (const { remote, branch, commit } of branches) {
    await checkout({ to: branch });
    await gitReset({ to: commit, hard: true });
    await push({ force: true, remote });
  }
  await checkout({ to: initHead as string });
}

type RemoveBranchesOptions = { branch: string; remote: string }[];

export async function remove(branches: RemoveBranchesOptions) {
  for (const { branch, remote } of branches) {
    await removeBranch({
      branch: branch,
      fromRemote: true,
      remote,
      strict: false,
    });
  }
}

type CreateBranchOptions<T extends string = string> = {
  branch: string;
  name: T;
  from?: string;
  count?: number;
  setUpstream?: boolean;
  remote?: string;
};
type CreateBranchesOptions<T extends string = string> = Array<
  CreateBranchOptions<T> & {
    messageGen?: (options: CreateBranchOptions<T>) => Generator<string>;
  }
>;

function* defaultMessageGen({ name }: CreateBranchOptions) {
  const commitTypes = ['chore', 'feat', 'fix'];
  const commitScopes = ['test'];
  let count = 0;

  const randomIndex = (arr: any[]) => Math.floor(Math.random() * arr.length);
  const randomCommitType = () => commitTypes[randomIndex(commitTypes)];
  const randomCommitScopes = () => commitScopes[randomIndex(commitScopes)];

  while (true) {
    yield `${randomCommitType()}(${randomCommitScopes()}): commit ${name} ${++count}`;
  }
}

export async function create<T extends string>(
  branches: CreateBranchesOptions<T>,
) {
  const initHead = await currentHead();
  const createdHeadCommits: {
    [K in T]: Commit;
  } = {} as any;
  for (const branchData of branches) {
    const {
      branch,
      name,
      from,
      count = 3,
      setUpstream,
      remote,
      messageGen = defaultMessageGen,
    } = branchData;
    await checkout({ to: branch, from });
    const msgGen = messageGen(branchData);

    for (const _ of Array(count).keys()) {
      await commit({ message: msgGen.next().value });
    }
    await push({ to: branch, setUpstream, remote });
    createdHeadCommits[name] = await lastCommit();
  }
  await checkout({ to: initHead as string });
  return createdHeadCommits;
}
