import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import size from 'rollup-plugin-size';

module.exports = [{
  input: 'src/index.ts',
  output: {
    file: 'dist/tplv.min.js',
    name: 'tplv',
    format: 'umd',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript(),
    uglify(),
    size(),
  ],
}];
