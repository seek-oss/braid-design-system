import path from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineProject } from 'vitest/config';

const braidSrc = path.join(__dirname, '../packages/braid-design-system/src');

export default defineProject({
  test: {
    globals: true,
    css: true,
  },
  resolve: {
    alias: {
      'braid-src': braidSrc,
      'braid-storybook': __dirname,
    },
  },
  plugins: [vanillaExtractPlugin()],
});
