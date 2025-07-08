import '../src/entries/reset';

import type { Preview } from '@storybook/react-webpack5';

import * as themes from '../src/lib/themes';

import { withTheme } from './decorators';
import { braidThemes, makeBraidModes } from './modes';

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
      modes: makeBraidModes({
        root: true,
        viewports: ['mobile'],
      }),
    },
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'paintbrush',
        items: braidThemes,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'apac',
  },
};

export default preview;
