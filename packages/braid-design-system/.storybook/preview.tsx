import '../src/entries/reset';

import type { Preview } from '@storybook/react-webpack5';

import * as themes from '../src/lib/themes';

import { withTheme } from './decorators';
import { modes } from './modes';

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
  parameters: {
    chromatic: {
      viewports: [320],
      modes,
    },
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'apac',
      toolbar: {
        icon: 'paintbrush',
        items: Object.keys(modes),
      },
    },
  },
};

export default preview;
