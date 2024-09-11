import { babel, webpackFinal } from 'sku/config/storybook';
import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  stories: ['../src/lib/stories/all.stories.tsx'],
  features: {
    storyStoreV7: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  addons: [],
  babel,
  webpackFinal,
} satisfies StorybookConfig;
