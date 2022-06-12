import { describe, expect, it } from 'vitest';
import plugin from '../src';

describe('plugin', () => {
  it('name', () => {
    expect(plugin.raw(undefined, { framework: 'vite' }).name).toBe(
      'unplugin-parcel-css'
    );
  });
});
