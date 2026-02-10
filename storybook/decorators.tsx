import type { Decorator } from '@storybook/react-webpack5';
import { BraidProvider } from 'braid-src/lib/components';
import { darkMode } from 'braid-src/lib/css/atoms/sprinkles.css';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import * as themes from 'braid-src/lib/themes';
import { BrowserRouter } from 'react-router';

import { Artboard } from './Artboard';
import type { StorybookGlobals } from './globalTypes';

export const withTheme: Decorator = (Story, context) => {
  const storybookGlobals = context.globals as StorybookGlobals;
  const isDark = storybookGlobals.colourMode === 'dark';
  const themeName = storybookGlobals.theme as keyof typeof themes;
  const theme = themes[themeName as keyof typeof themes];

  if (!theme) {
    throw new Error(`Theme not found: "${themeName}".`);
  }

  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle(darkMode, isDark);
  }

  return (
    <BrowserRouter>
      <BraidProvider theme={theme}>
        <Artboard darkMode={isDark}>
          <PlayroomStateProvider>
            <Story />
          </PlayroomStateProvider>
        </Artboard>
      </BraidProvider>
    </BrowserRouter>
  );
};
