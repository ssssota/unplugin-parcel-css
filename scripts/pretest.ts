/* eslint-disable no-console */
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import fs from 'fs';
import c from 'picocolors';

const basic = {
  name: 'basic',
  run(path: string) {
    if (fs.existsSync(join(path, 'dist'))) {
      fs.rmSync(join(path, 'dist'), { force: true, recursive: true });
    }
    console.log(c.yellow(c.inverse(c.bold('\n Vite '))), this.name, '\n');
    execSync('npx vite build', { cwd: path, stdio: 'inherit' });
    console.log(c.red(c.inverse(c.bold('\n Rollup '))), this.name, '\n');
    execSync('npx rollup -c', { cwd: path, stdio: 'inherit' });
    console.log(c.blue(c.inverse(c.bold('\n webpack '))), this.name, '\n');
    execSync('npx webpack', { cwd: path, stdio: 'inherit' });
  },
};

async function run() {
  const dir = resolve(__dirname, '../test/fixtures');
  const fixtures = [basic];

  for (const fixture of fixtures) {
    const path = join(dir, fixture.name);
    fixture.run(path);
  }
}

run();
