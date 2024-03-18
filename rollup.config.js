const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = [
  {
    input: 'index.mjs',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    plugins: [resolve(), commonjs()]
  },
  {
    input: 'index.mjs',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    plugins: [resolve(), commonjs()]
  }
];