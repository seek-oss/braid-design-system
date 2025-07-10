import type { Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

import { BraidProvider, ToastProvider } from '../src/lib/components';
import { PlayroomStateProvider } from '../src/lib/playroom/playroomState';
import * as themes from '../src/lib/themes';

import { Artboard } from './Artboard';

import { darkMode } from '../src/lib/css/atoms/sprinkles.css';

export const withTheme: Decorator = (Story, context) => {
  const themeName = context.globals.theme as string;
  const nonDarkThemeName = themeName.replace('Dark', '');
  const isDark = themeName.includes('Dark');

  const theme = themes[nonDarkThemeName as keyof typeof themes];

  if (!theme) {
    throw new Error(`Theme not found: "{nonDarkThemeName}".`);
  }

  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle(darkMode, isDark);
  }

  return (
    <BrowserRouter>
      <BraidProvider theme={theme}>
        <ToastProvider>
          <Artboard darkMode={isDark}>
            <PlayroomStateProvider>
              <Story />
            </PlayroomStateProvider>
          </Artboard>
        </ToastProvider>
      </BraidProvider>
    </BrowserRouter>
  );
};
