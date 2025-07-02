import { createRequire } from "node:module";
/* eslint-disable no-console */
import fs from 'fs';
import path, { dirname, join } from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';

const require = createRequire(import.meta.url);

const screenshotsIndexer = {
  test: /\.screenshots\.[tj]sx?$/,
  createIndex: async (fileName: string) => {
    try {
      const componentName = path
        .basename(fileName)
        .replace(/\.screenshots\.[tj]sx?$/, '');

      const fileContent = await fs.promises.readFile(fileName, 'utf8');

      const hasDefaultExport = fileContent.includes('export default meta');

      if (!hasDefaultExport) {
        console.log(
          `Warning: ${fileName} doesn't appear to be in CSF format yet.`,
        );
        return [];
      }

      const storyExportMatches = fileContent.matchAll(/export const (\w+)/g);
      const storyExports = [...storyExportMatches].map((match) => match[1]);

      if (storyExports.length === 0) {
        console.log(`Warning: No exported stories found in ${fileName}`);
      }

      return storyExports.map((exportName) => ({
        type: 'story' as const,
        title: `Components/${componentName}`,
        importPath: fileName,
        exportName,
      }));
    } catch (error) {
      console.error(`Error indexing ${fileName}:`, error);
      return [];
    }
  },
};

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
