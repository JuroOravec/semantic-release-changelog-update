import type { Branch, Meta } from '../types';
import debug from './debug';

// Object with default data that should be shared between plugin functions
export function init<T extends object>(options = {} as T) {
  // Defaults from:
  // https://github.com/semantic-release/semantic-release/blob/caa3526caa686c18eb935dace80a275017746215/docs/usage/configuration.md#branches
  const defaultBranches: Branch[] = [
    { name: '+([0-9])?(.{+([0-9]),x}).x' },
    { name: 'master' },
    { name: 'next' },
    { name: 'next-major' },
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ];

  const meta: Meta & T = {
    defaultBranches,
    ...options,
  };

  return meta;
}

export function clean(meta: Meta) {
  debug('Cleaning meta object');
  Object.keys(meta).forEach((key: string) => {
    delete meta[key as keyof Meta];
  });
  return meta;
}

export function prepare<T extends object>(meta: Meta, options?: T) {
  clean(meta);
  Object.assign(meta, init(options));
  return meta;
}
