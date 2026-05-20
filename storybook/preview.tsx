import 'braid-design-system/reset';

import type { Preview } from '@storybook/react-webpack5';
import docs from 'braid-design-system/themes/docs';
import seekBusiness from 'braid-design-system/themes/seekBusiness';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';

import { setChromatic } from './chromatic';
import { withTheme } from './decorators';
import { colourModes, defaultColourMode } from './globalTypes';
const themes = {
  docs,
  seekBusiness,
  seekJobs,
  wireframe,
};

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
    colourMode: {
      name: 'Colour mode',
      description: 'Global colour mode',
      toolbar: {
        icon: 'moon',
        items: colourModes.map((mode) => ({
          value: mode,
          icon: mode === 'light' ? 'sun' : 'moon',
          title: mode.charAt(0).toUpperCase() + mode.slice(1),
        })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'seekJobs',
    colourMode: defaultColourMode,
  },
};

export default preview;
