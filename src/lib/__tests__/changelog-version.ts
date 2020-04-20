import * as safeReadFileModule from '../safe-read-file';
import changelogVersion from '../changelog-version';

describe('changelogVersion', () => {
  const path = 'random_gibberish.com';
  const changelogData = `## [1.2.3](https://some.url.com/1.2.3-description)
      
  ### Change Type

  * bullet point One

  * bullet point Two

  ## [1.2.2](https://another.update.com)

  ### Change Type

  * Another Bullet point
  `;

  test('returns null if no changelog found', async () => {
    const version = await changelogVersion(path);
    expect(version).toBeNull();
  });

  test('finds version number', async () => {
    const fileReaderSpy = jest.spyOn(safeReadFileModule, 'default');
    fileReaderSpy.mockReturnValue(Promise.resolve(changelogData));

    const version = await changelogVersion(path);

    expect(version).toBeTruthy();
    expect(version).toBe('1.2.3');

    fileReaderSpy.mockRestore();
  });

  test('search pattern can be overriden', async () => {
    const pattern = /±+\s+\[(?<version>.*?)\]/u;
    const fileReaderSpy = jest.spyOn(safeReadFileModule, 'default');
    fileReaderSpy.mockReturnValue(
      Promise.resolve(changelogData.replace(/#/gu, '±')),
    );

    const version = await changelogVersion(path, pattern);

    expect(version).toBeTruthy();
    expect(version).toBe('1.2.3');

    fileReaderSpy.mockRestore();
  });

  test('returns null if no version number found', async () => {
    const fileReaderSpy = jest.spyOn(safeReadFileModule, 'default');
    fileReaderSpy.mockReturnValue(Promise.resolve(null));

    const version = await changelogVersion(path);

    expect(version).toBeNull();

    fileReaderSpy.mockRestore();
  });
});
