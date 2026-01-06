import { readFile } from 'fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';
import { loadCsf } from 'storybook/internal/csf-tools';
import type { Indexer } from 'storybook/internal/types';

const require = createRequire(import.meta.url);

const screenshotsIndexer: Indexer = {
  test: /\.screenshots\.[tj]sx?$/,
  createIndex: async (fileName: string, { makeTitle }) => {
    const code = await readFile(fileName, { encoding: 'utf-8' });

    return loadCsf(code, {
      makeTitle,
      fileName,
    }).parse().indexInputs;
  },
};

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  stories: ['../src/lib/components/**/*.screenshots.@(js|jsx|ts|tsx)'],
  experimental_indexers: (existingIndexers, _options) => [
    ...(existingIndexers ?? []),
    screenshotsIndexer,
  ],
  addons: [],
  babel,
  webpackFinal: async (webpackConfig, options) => {
    const skuConfig = await webpackFinal(webpackConfig, options);
    skuConfig.resolve ??= {};
    skuConfig.resolve.alias = {
      ...skuConfig.resolve?.alias,
      'braid-storybook': import.meta.dirname,
    };

    return skuConfig;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
