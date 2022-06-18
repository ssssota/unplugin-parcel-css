const { resolve } = require('path');
const ParcelCSS = require('../../../dist/webpack');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist/webpack'),
    filename: 'main.js',
  },
  module: {
    rules: [{ test: /\.css/, use: 'css-loader' }],
  },
  plugins: [ParcelCSS()],
  devtool: 'source-map',
};
