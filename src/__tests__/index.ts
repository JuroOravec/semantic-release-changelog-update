import { randomBytes } from 'crypto';
import path from 'path';
import envCi from 'env-ci';
import type { Options } from 'semantic-release';

import { changelogUpdate } from '../index';
import {
  checkout,
  currentBranch,
  stash,
  status,
  Commit,
  currentHead,
} from '../lib/git';

import {
  recordEnvironment,
  Env as RecordedEnv,
} from '../../test/lib/record-env';
import * as chlog from '../../test/fixtures/changelog';
import * as branch from '../../test/fixtures/branch';

type StartBranchTypes = 'other' | 'head' | 'base';

type FixedBranchArg = [
  {
    branch: string;
    branchType: string;
    getCommit: () => Commit;
  },
];

const prepos: { [K in chlog.TemplateTypes]: string } = {
  future: 'ahead of',
  current: 'at',
  past: 'behind',
};

const getRemoteUrl = () =>
  `https://${process.env.GH_TOKEN}@github.com/${process.env.GIT_USERNAME}` +
  `/semantic-release-changelog-update.git`;

describe('changelogUpdate', () => {
  /**
   * Constants
   */
  const { isCi, branch: ciBranch } = envCi();
  const runId = randomBytes(8).toString('hex');
  const remote = isCi ? getRemoteUrl() : 'origin';
  const headBranch = `temp/test/${runId}/headbranch`;
  const baseBranch = `temp/test/${runId}/basebranch`;
  const otherBranch = `temp/test/${runId}/other`;
  const srBranches: Options['branches'] = isCi
    ? [ciBranch!]
    : [otherBranch, headBranch, baseBranch];

  /**
   * Mocks
   */
  jest.mock(path.resolve(process.cwd(), 'release.config.js'), () => ({}));

  /**
   * Parameters
   */

  type StartBranchArg = [StartBranchTypes, string];
  /**
   *  Branches to start update changelog from in the format
   *
   * `[ branchType, branchName ]`
   */
  const startBranches: StartBranchArg[] = [
    ['other', otherBranch],
    ['head', headBranch],
    ['base', baseBranch],
  ];

  type ChangelogTypeArg = [
    typeof prepos[chlog.TemplateTypes],
    chlog.TemplateTypes,
    boolean,
  ];
  /**
   * Changelog types to be used in tests to be tried to be update.
   *
   * `[ branchTypePreposition, branchType, branchName ]`
   *
   * `branchTypePreposition` - used for formatting the describe statement
   *
   * `chlogType` - indicates whether the changelog's latest entry is
   *   behind / at / ahead of package version.
   *
   * `shouldUpdateChlog` - whether we expect the changelog to be updated
   */
  const changelogTypes: ChangelogTypeArg[] = [
    [prepos['past'], 'past', true],
    [prepos['current'], 'current', true],
    [prepos['future'], 'future', false],
  ];

  // Prepare branches to be checked for remaining unmodified by test
  // Since headBranch is intended to be modified, don't include it if
  // that's our starting branch.
  const fixedBranches: FixedBranchArg[] = [
    [
      {
        branch: otherBranch,
        branchType: 'other',
        getCommit: () => otherLastCommit,
      },
    ],
    [
      {
        branch: baseBranch,
        branchType: 'base',
        getCommit: () => baseLastCommit,
      },
    ],
  ];

  /**
   * Shared variables
   */

  let stashed: boolean;

  let initialHuskyHooks: string | undefined;
  let initialBranch: string;

  let otherLastCommit: Commit;
  let baseLastCommit: Commit;
  let headLastCommit: Commit;

  beforeAll(async () => {
    // Disable Husky hooks
    initialHuskyHooks = process.env.HUSKY_SKIP_HOOKS;
    process.env.HUSKY_SKIP_HOOKS = '1';
    // Remember the branch or commit we were on when we started the tests
    initialBranch = await currentHead();
    // Stash changes made to avoid losing them
    if (await status()) {
      stashed = true;
      await stash.push({ message: `Temp stash test ${runId}` });
    }

    // Create test branches with test commits
    // The "other" branch is our default branch, the branch we resolve to
    // when we don't want to be on either head nor base branch.
    const lastCommits = await branch.create([
      {
        name: 'otherBranch',
        branch: otherBranch,
        from: initialBranch,
        setUpstream: true,
        remote,
      },
      {
        name: 'baseBranch',
        branch: baseBranch,
        from: otherBranch,
        setUpstream: true,
        remote,
      },
      {
        name: 'headBranch',
        branch: headBranch,
        from: otherBranch,
        setUpstream: true,
        remote,
      },
    ]);
    headLastCommit = lastCommits.headBranch;
    baseLastCommit = lastCommits.baseBranch;
    otherLastCommit = lastCommits.otherBranch;
  });

  test('[meta] branch setup works', () => expect(true).toBe(true));

  afterAll(async () => {
    // Remove branches
    const currBranch = await currentBranch();
    if (currBranch !== initialBranch) {
      await checkout({ to: initialBranch });
    }
    await branch.remove([
      { branch: baseBranch, remote },
      { branch: headBranch, remote },
      { branch: otherBranch, remote },
    ]);

    // Restore Husky hooks
    process.env.HUSKY_SKIP_HOOKS = initialHuskyHooks;
    // Restore local changes
    if (stashed) await stash.pop();
  });

  describe.each(startBranches)('triggered on %s', (branchType, startBranch) => {
    // Test conditions when changelog is either ahead of, at, or behind
    // package.json
    describe.each(changelogTypes)(
      'changelog version is %s package version',
      (_, chlogType, shouldUpdateChlog) => {
        let env: RecordedEnv = {};
        let chlogEnv = {} as chlog.Env;

        beforeAll(async () => {
          await checkout({ to: startBranch });
          chlogEnv = await chlog.prepare(chlogType);

          /**
           * Running the whole semantic-release pipeline is lengthy, so instead
           * of running it for each test, we run it once for the
           * given parameters, evaluate and assign all values required by tests
           * here, and individual tests then query the values of the env
           * object.
           */
          const envDefaults = {
            before: {
              remote: { default: { url: remote } },
              changelog: chlogEnv,
              branch: {
                base: {
                  name: baseBranch,
                  commit: baseLastCommit,
                },
                head: {
                  name: headBranch,
                  commit: headLastCommit,
                },
                other: {
                  name: otherBranch,
                  commit: otherLastCommit,
                },
              },
            },
          };
          env = await recordEnvironment(
            () =>
              changelogUpdate({
                options: {
                  branches: srBranches,
                },
                pluginOptions: {
                  headBranch,
                  baseBranch,
                  changelogFile: chlogEnv.file,
                  releaseBranches: [baseBranch],
                  // Ensure that that the dummy commits trigger release.
                  releaseRules: [
                    { message: '*chore\\(test\\)*', release: 'patch' },
                    { message: '*fix\\(test)*', release: 'patch' },
                    { message: '*feat\\(test\\)*', release: 'minor' },
                  ],
                },
              }),
            envDefaults,
          );
        });

        afterAll(async () => {
          env = {};
          await chlog.restore(chlogEnv);
          chlogEnv = {} as chlog.Env;
          // Return branches to starting state
          await branch.reset([
            { branch: otherBranch, commit: otherLastCommit.hash, remote },
            { branch: headBranch, commit: headLastCommit.hash, remote },
            { branch: baseBranch, commit: baseLastCommit.hash, remote },
          ]);
        });

        runTests({
          branch: {
            type: branchType,
          },
          changelog: { type: chlogType, shouldUpdate: shouldUpdateChlog },
          fixedBranches,
          getEnv: () => env,
        });
      },
    );
  });
});

type RunTestsOptions = {
  branch: { type: StartBranchTypes };
  changelog: { type: chlog.TemplateTypes; shouldUpdate: boolean };
  getEnv: () => RecordedEnv;
  fixedBranches: FixedBranchArg[];
};

function runTests({
  branch: { type: branchType },
  changelog: { type: chlogType, shouldUpdate: shouldUpdateChlog },
  getEnv,
  fixedBranches,
}: RunTestsOptions) {
  test(`[${branchType}][${chlogType}][meta] setup works`, async () => {
    const env = getEnv();
    expect(env).toBeInstanceOf(Object);
  });

  test.todo(
    `[${branchType}][${chlogType}] should fail without 'headBranch' in non-ci env`,
  );

  test.todo(
    `[${branchType}][${chlogType}] should not fail without 'headBranch' in ci env`,
  );

  test.todo(
    `[${branchType}][${chlogType}] should fail without 'baseBranch' in non-ci env`,
  );

  test.todo(
    `[${branchType}][${chlogType}] should not fail without 'baseBranch' in ci env`,
  );

  test.todo(
    `[${branchType}][${chlogType}] fails if starting branch not in options.branches` +
      '(semantic-release)',
  );

  test.todo(
    `[${branchType}][${chlogType}] should fail if base branch not in ` +
      'pluginOptions.releaseBranches',
  );

  describe('branch manipulation', () => {
    test.each(fixedBranches)(
      `[${branchType}][${chlogType}] does not pollute other branches`,
      async ({ branchType: fixedBranchType, getCommit }) => {
        const env = getEnv();
        const {
          hash: expectedHash,
          message: expectedMessage,
        } = await getCommit();
        const { message, hash } = env.after!.branch![fixedBranchType].commit!;

        expect(env.after!.branch!.current.changes).toHaveLength(0);

        expect(message).toBe(expectedMessage);
        expect(hash).toBe(expectedHash);
      },
    );

    test(`[${branchType}][${chlogType}] updates head branch with new commit`, async () => {
      const env = getEnv();
      const {
        hash: expectedHash,
        message: expectedMessage,
      } = env.before!.branch!.head.commit!;
      const { message, hash } = env.after!.branch!.head.commit!;

      // The commits should be different only if the changelog updates
      if (shouldUpdateChlog) {
        expect(message).not.toBe(expectedMessage);
        expect(hash).not.toBe(expectedHash);
      } else {
        expect(message).toBe(expectedMessage);
        expect(hash).toBe(expectedHash);
      }
    });

    test(`[${branchType}][${chlogType}] introduces only one new commit`, async () => {
      const env = getEnv();
      const {
        hash: expectedHash,
        message: expectedMessage,
      } = env.before!.branch!.head.commit!;
      // Check that the previous commit is the one we started with.
      // If the changelog should not be updated, we expect the branch
      // to remain unchanged.
      const branchPosWithPrevCommit = shouldUpdateChlog ? 'head^' : 'head';
      const { message, hash } = env.after!.branch![
        branchPosWithPrevCommit
      ].commit!;

      expect(message).toBe(expectedMessage);
      expect(hash).toBe(expectedHash);
    });

    test(`[${branchType}][${chlogType}] cleans up the temp branch`, async () => {
      const env = getEnv();
      // Sanity check to confirm we're point to right origin
      expect(env.after!.branch!.head.exists).toBe(true);

      expect(env.after!.branch!.tempHead.exists).toBe(false);
    });
  });

  describe('changelog modification', () => {
    const neg = shouldUpdateChlog ? '' : 'not ';
    test(
      `[${branchType}][${chlogType}] does ${neg}happen on head branch` +
        ` if changelog version is ${prepos[chlogType]} package version`,
      async () => {
        const env = getEnv();
        const { content, contentInitial } = env.after!.branch!.head.changelog!;

        if (shouldUpdateChlog) {
          expect(content).not.toBe(contentInitial);
        } else {
          expect(content).toBe(contentInitial);
        }
      },
    );

    test.todo(
      `[${branchType}][${chlogType}] test 'pattern' plugin option ` +
        `works as intended`,
    );

    test.todo(
      `[${branchType}][${chlogType}] test 'prepareChangelog' plugin ` +
        `option works as intended`,
    );

    test.todo(
      `[${branchType}][${chlogType}] changelog is generated if the file is ` +
        `empty or there's no changelog file yet`,
    );
  });
}
