import '../src/reset';

import type { Preview } from '@storybook/react-webpack5';

import * as themes from '../src/lib/themes';

import { setChromatic } from './chromatic';
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
  parameters: {
    chromatic: setChromatic({ root: true }),
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'paintbrush',
        items: Object.keys(themes),
        dynamicTitle: true,
      },
    },
    darkMode: {
      name: 'Dark mode',
      description: 'Global colour mode',
      toolbar: {
        icon: 'moonicon',
        items: [
          { value: false, icon: 'sun', title: 'Light' },
          { value: true, icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'seekJobs',
    darkMode: false,
  },
};

export default preview;
