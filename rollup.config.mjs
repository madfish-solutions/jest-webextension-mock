import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/setup.js',
  plugins: [
    resolve(),
    commonjs()
  ],
  output: {
    format: 'cjs',
    file: pkg.main
  },
};
