import initMeta from '../meta';

describe('initMeta', () => {
  test('returns an object', () => {
    const meta = initMeta();
    expect(meta).toBeInstanceOf(Object);
  });

  test('returns an object with passed args', () => {
    const args = { hello: true };
    const meta = initMeta(args);
    expect(meta).toHaveProperty('hello');
    expect(meta['hello']).toEqual(true);
  });
});
