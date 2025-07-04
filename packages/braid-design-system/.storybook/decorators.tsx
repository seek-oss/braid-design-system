import type { Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

import { BraidProvider, ToastProvider } from '../src/lib/components';
import { PlayroomStateProvider } from '../src/lib/playroom/playroomState';
import * as themes from '../src/lib/themes';

import { darkMode } from '../src/lib/css/atoms/sprinkles.css';

export const withTheme: Decorator = (Story, context) => {
  const themeName = context.globals.theme as string;
  const nonDarkThemeName = themeName.replace('Dark', '');
  const isDark = themeName.includes('Dark');

  let theme = themes[nonDarkThemeName];

  if (!theme) {
    // eslint-disable-next-line no-console
    console.warn(
      `Theme "${nonDarkThemeName}" not found, using "apac" theme instead.`,
    );
    theme = themes.apac;
  }

  if (isDark && typeof document !== 'undefined') {
    document.documentElement.classList.add(darkMode);
  } else if (typeof document !== 'undefined') {
    document.documentElement.classList.remove(darkMode);
  }

  const styleContent = `
    .noAnimation * {
      animation-delay: -0.0001s !important;
      animation-play-state: paused !important;
      animation-duration: 0s !important;
      animation-fill-mode: none !important;
      transition-delay: 0s !important;
      transition-duration: 0s !important;
    }
    .artboard {
      --deepColor: ${isDark ? `rgba(255, 255, 255, .1)` : `rgba(0, 0, 0, .05)`};
      --cubeSize: 12px;
      background-color: ${isDark ? `black` : `white`};
      background-image: linear-gradient(45deg, var(--deepColor) 25%, transparent 25%, transparent 75%, var(--deepColor) 75%, var(--deepColor)),
        linear-gradient(45deg, var(--deepColor) 25%, transparent 25%, transparent 75%, var(--deepColor) 75%, var(--deepColor));
      background-size: calc(var(--cubeSize) * 2) calc(var(--cubeSize) * 2);
      background-position: 0 0, var(--cubeSize) var(--cubeSize);
    }
  `;

  return (
    <BrowserRouter>
      <BraidProvider theme={theme}>
        <ToastProvider>
          <style type="text/css">{styleContent}</style>
          <div className="noAnimation artboard">
            <PlayroomStateProvider>
              <Story />
            </PlayroomStateProvider>
          </div>
        </ToastProvider>
      </BraidProvider>
    </BrowserRouter>
  );
};
