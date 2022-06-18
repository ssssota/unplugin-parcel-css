# unplugin-parcel-css

[![NPM version](https://img.shields.io/npm/v/unplugin-parcel-css)](https://www.npmjs.com/package/unplugin-parcel-css)

A Vite/webpack/Rollup/esbuild plugin with
[@parcel/css](https://github.com/parcel-bundler/parcel-css).

@parcel/css is

> A CSS parser, transformer, and minifier written in Rust.

## Usage

### Vite

```ts
// vite.config.ts
import ParcelCSS from 'unplugin-parcel-css/vite';
export default defineConfig({
  plugins: [
    ParcelCSS({
      /* options */
    }),
  ],
});
```

Example: [`playground/`](./playground/)

### Rollup

```ts
// rollup.config.js
import ParcelCSS from 'unplugin-parcel-css/rollup';
export default {
  plugins: [
    ParcelCSS({
      /* options */
    }),
  ],
};
```

You should use with css bundler like `rollup-plugin-css-only`.

### Webpack

```ts
// webpack.config.js
module.exports = {
  // ...
  plugins: [
    require('unplugin-parcel-css/webpack')({
      /* options */
    }),
  ],
};
```

You should use with `css-loader`.

### Next.js

```ts
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      require('unplugin-parcel-css/webpack')({
        /* options */
      })
    );
    return config;
  },
};
```

### Nuxt

```ts
// nuxt.config.js
export default {
  buildModules: [
    [
      'unplugin-parcel-css/nuxt',
      {
        /* options */
      },
    ],
  ],
};
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

### Vue CLI

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-parcel-css/webpack')({
        /* options */
      }),
    ],
  },
};
```

## Contribute

Welcome!

## License

MIT
