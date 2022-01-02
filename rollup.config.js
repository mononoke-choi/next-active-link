import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('rollup').RollupOptions}
 */
const entryConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    optimizeLodashImports(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', outputToFilesystem: false }),
    ...(isProd ? [terser()] : []),
  ],
  external: ['react', 'react-dom', 'next'],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const definitionConfig = {
  input: 'dist/esm/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  plugins: [dts()],
};

export default [entryConfig, definitionConfig];
