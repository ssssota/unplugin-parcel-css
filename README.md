# unplugin-parcel-css

[![NPM version](https://img.shields.io/npm/v/unplugin-parcel-css?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-parcel-css)

A Vite/webpack/Rollup/esbuild plugin with
[@parcel/css](https://github.com/parcel-bundler/parcel-css).

@parcel/css is

> A CSS parser, transformer, and minifier written in Rust.

## Usage

### Vite

```ts
// vite.config.ts
import ParcelCssPlugin from 'unplugin-parcel-css';
export default defineConfig({
  plugins: [
    // ...
    ParcelCssPlugin.vite(),
  ],
});
```

### Rollup

```js
// rollup.config.js
import ParcelCssPlugin from 'unplugin-parcel-css';
export default {
  plugins: [
    // ...
    ParcelCssPlugin.rollup(),
  ],
};
```

### webpack

```js
// webpack.config.js
module.exports = {
  plugins: [
    // ...
    require('unplugin-parcel-css').webpack(),
  ],
};
```

### esbuild

```js
import { build } from 'esbuild';
import ParcelCssPlugin from 'unplugin-parcel-css';
build({
  // ...
  plugins: [
    // ...
    ParcelCssPlugin.esbuild(),
  ],
});
```

## Contribute

Welcome!

## License

MIT
