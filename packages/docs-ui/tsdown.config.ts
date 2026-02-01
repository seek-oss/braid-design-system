import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './src/index.ts',
  exports: {
    devExports: 'braid-dev',
  },
  format: ['cjs', 'esm'],
  tsconfig: './tsconfig.build.json',
  unbundle: true,
  plugins: [
    vanillaExtractPlugin({
      unstable_injectFilescopes: true,
    }),
  ],
});
