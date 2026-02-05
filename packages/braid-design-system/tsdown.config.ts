import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: './src/index.ts',
    'color-mode/query-param': './src/color-mode/query-param.ts',
    css: './src/css.ts',
    'playroom/components': './src/playroom/components.ts',
    'playroom/FrameComponent': './src/playroom/FrameComponent.ts',
    'playroom/scope': './src/playroom/scope.ts',
    'playroom/snippets': './src/playroom/snippets.ts',
    reset: './src/reset.ts',
    test: './src/test.ts',
    'themes/docs': './src/themes/docs.ts',
    'themes/seekBusiness': './src/themes/seekBusiness.ts',
    'themes/seekJobs': './src/themes/seekJobs.ts',
    'themes/wireframe': './src/themes/wireframe.ts',
  },
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
