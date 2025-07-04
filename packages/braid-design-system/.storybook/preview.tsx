import '../src/entries/reset';

import type { Preview } from '@storybook/react-webpack5';

import * as themes from '../src/lib/themes';

import { withTheme } from './decorators';

const webFontLinkTags = Array.from(
  new Set(
    Object.values(themes)
      .flatMap((theme) => theme.webFonts)
      .map((font) => font.linkTag),
  ),
).join('');

if (typeof document !== 'undefined') {
  document.head.innerHTML += webFontLinkTags;
}

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'apac',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'apac', title: 'APAC' },
          { value: 'apacDark', title: 'APAC Dark' },
          { value: 'seekJobs', title: 'SEEK Jobs' },
          { value: 'seekJobsDark', title: 'SEEK Jobs Dark' },
          { value: 'seekBusiness', title: 'SEEK Business' },
        ],
      },
    },
  },
};

export default preview;
