import safeFileRead from '../safe-read-file';

describe('safeReadFile', () => {
  test('returns file content if file exists', async () => {
    const content = await safeFileRead('./package.json');
    expect(content).toBeTruthy();
    expect(typeof content).toBe('string');
    expect(content).toMatch(/semantic-release-changelog-update/u);
  });

  test('returns null if file does not exists', async () => {
    const content = await safeFileRead('./random-gibberish.ts');
    expect(content).toBeNull();
  });
});
