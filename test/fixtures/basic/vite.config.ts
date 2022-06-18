import { resolve } from 'path';
import { defineConfig } from 'vite';
import ParcelCSS from '../../../dist/vite';

// const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  root: __dirname,
  plugins: [ParcelCSS()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'main',
      fileName: 'main.js',
    },
    outDir: 'dist/vite',
    sourcemap: true,
  },
});
