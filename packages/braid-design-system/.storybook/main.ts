import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';

export default {
  // stories: ['../src/lib/components/**/*.stories.tsx'],
  stories: ['../src/lib/stories/**/*.stories.@(js|jsx|ts|tsx)'],
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
