import css from 'rollup-plugin-css-only';
import ParcelCSS from '../../../dist/rollup';

export default {
  input: './src/main.js',
  output: {
    dir: './dist/rollup',
    sourcemap: true,
  },
  plugins: [ParcelCSS(), css()],
};
