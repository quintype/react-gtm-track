import babel from 'rollup-plugin-babel';
import packageJson from './package.json';
const dependencies = packageJson.dependencies || {};

export default {
  input: 'src/index.js',
  output: [
    { format: 'cjs', file: 'dist/cjs/index.js' }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
  external: Object.keys(dependencies)
};
