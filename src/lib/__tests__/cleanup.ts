import * as gitModule from '../git';
import cleanup from '../cleanup';

describe('cleanup', () => {
  const pushSpy = jest.spyOn(gitModule, 'push');
  pushSpy.mockReturnValue(Promise.resolve() as any);
  const repoUrl = 'repo_url';
  const branch = 'branch';
  const context = {
    options: { repositoryUrl: repoUrl },
    logger: {
      info: console.log,
    },
  };

  test('calls git push to delete remote branch if conditions verified', async () => {
    const meta = { dummyBranch: branch, verified: true };
    const expected = [{ delete: branch, remote: repoUrl }, context];

    await cleanup({} as any, context as any, meta);

    expect(pushSpy).toBeCalled();
    expect(pushSpy).toBeCalledTimes(1);
    expect(pushSpy).toBeCalledWith(...expected);

    pushSpy.mockClear();
  });

  test('does not call git push if conditions not verified', async () => {
    const meta = { dummyBranch: branch, verified: false };

    await cleanup({} as any, context as any, meta);

    expect(pushSpy).not.toBeCalled();

    pushSpy.mockClear();
  });
});
