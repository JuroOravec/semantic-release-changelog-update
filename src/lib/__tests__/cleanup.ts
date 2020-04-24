import * as gitModule from '../git';
import cleanup from '../cleanup';

describe('cleanup', () => {
  const repoUrl = 'repo_url';
  const branch = 'branch';
  let loggerStack: string[] = [];
  const context = {
    options: { repositoryUrl: repoUrl },
    logger: {
      info: (...args: any[]) => loggerStack.push(...args),
    },
  };
  const removeBranchSpy = jest.spyOn(gitModule, 'removeBranch');
  removeBranchSpy.mockReturnValue(Promise.resolve() as any);

  afterEach(() => {
    loggerStack = [];
    removeBranchSpy.mockClear();
  });

  test('runs if verified is true', async () => {
    const meta = { dummyBranch: branch, verified: true };

    await cleanup({} as any, context as any, meta);

    expect(loggerStack).toHaveLength(0);
  });

  test('does not run if verified is false', async () => {
    const meta = { dummyBranch: branch, verified: false };

    await cleanup({} as any, context as any, meta);

    expect(loggerStack).toHaveLength(1);
  });
});
