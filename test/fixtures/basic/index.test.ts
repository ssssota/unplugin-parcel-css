import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';

const expected =
  'html,body{margin:0;padding:0}*,:before,:after{box-sizing:border-box}';

const readFile = (path: string) => readFileSync(path, 'utf8').trimEnd();

describe('basic', () => {
  it('rollup', () => {
    const css = readFile(join(__dirname, 'dist/rollup/bundle.css'));
    expect(css).toBe(expected);
  });
  it('vite', () => {
    const css = readFile(join(__dirname, 'dist/vite/style.css'));
    expect(css).toBe(expected);
  });
  it('webpack', () => {
    const css = readFile(join(__dirname, 'dist/webpack/main.js'));
    expect(css).to.includes(expected);
  });
});
