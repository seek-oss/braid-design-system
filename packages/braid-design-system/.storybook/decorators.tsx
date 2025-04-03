import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BraidProvider, ToastProvider } from '../src/lib/components';
import { PlayroomStateProvider } from '../src/lib/playroom/playroomState';
import * as themes from '../src/lib/themes';
import { darkMode } from '../src/lib/css/atoms/sprinkles.css';

export const withTheme = (Story, context) => {
  const theme = themes[context.globals.theme] || themes.apac;
  const isDark =
    context.globals.theme === 'apacDark' ||
    context.globals.theme === 'seekJobsDark';

  if (isDark) {
    document.documentElement.classList.add(darkMode);
  } else {
    document.documentElement.classList.remove(darkMode);
  }

  return (
    <BrowserRouter>
      <BraidProvider theme={theme}>
        <ToastProvider>
          <style type="text/css">{`
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
          `}</style>
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
