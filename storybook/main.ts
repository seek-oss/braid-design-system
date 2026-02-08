import { readFile } from 'fs/promises';
import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';
import { loadCsf } from 'storybook/internal/csf-tools';
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

const braidSrc = path.join(
  import.meta.dirname,
  '../packages/braid-design-system/src',
);

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  stories: [`${braidSrc}/lib/components/**/*.screenshots.@(js|jsx|ts|tsx)`],
  experimental_indexers: (existingIndexers, _options) => [
    ...(existingIndexers ?? []),
    screenshotsIndexer,
  ],
  addons: ['@storybook/addon-webpack5-compiler-babel'],
  babel,
  webpackFinal: async (webpackConfig, options) => {
    const skuConfig = await webpackFinal(webpackConfig, options);
    skuConfig.resolve ??= {};
    skuConfig.resolve.alias = {
      ...skuConfig.resolve?.alias,
      'braid-storybook': import.meta.dirname,
      'braid-src': braidSrc,
    };

    return skuConfig;
  },
};

export default config;
