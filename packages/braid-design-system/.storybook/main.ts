import { readFile } from 'fs/promises';

import { loadCsf } from '@storybook/csf-tools';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';
import type { Indexer } from 'storybook/internal/types';

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
    name: '@storybook/react-webpack5',
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
  webpackFinal,
};

export default config;
