import { init, clean, prepare } from '../meta';
import { Meta } from '../../types';

describe('meta', () => {
  test('init returns an object', () => {
    const meta = init();
    expect(meta).toBeInstanceOf(Object);
  });

  test('init returns an object with passed args', () => {
    const args = { hello: true };
    const meta = init(args);
    expect(meta).toHaveProperty('hello');
    expect(meta['hello']).toEqual(true);
  });

  test('clean removes props from an object', () => {
    const meta = { hello: 'there', 1: 2 };
    clean(meta as Meta);
    expect(Object.keys(meta).length).toBe(0);
  });

  test('prepare returns the object to orginal state', () => {
    const args = { hello: true };
    const meta = init(args);
    meta.hello = 22 as any;
    meta.dummyBranch = 'test';
    prepare(meta);
    expect(meta).not.toHaveProperty('hello');
    expect(meta.dummyBranch).not.toBe('test');
    prepare(meta, args);
    expect(meta).toHaveProperty('hello');
  });
});
