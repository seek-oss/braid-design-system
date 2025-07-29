import type { Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router';

import { BraidProvider } from '../src/lib/components';
import { PlayroomStateProvider } from '../src/lib/playroom/playroomState';
import * as themes from '../src/lib/themes';

import { Artboard } from './Artboard';

import { darkMode } from '../src/lib/css/atoms/sprinkles.css';

export const withTheme: Decorator = (Story, context) => {
  const isDark = context.globals.darkMode;
  const themeName = context.globals.theme as keyof typeof themes;
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
