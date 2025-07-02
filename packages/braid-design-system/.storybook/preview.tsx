import '../src/entries/reset';

import type { Preview, Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

import { BraidProvider, ToastProvider } from '../src/lib/components';
import { PlayroomStateProvider } from '../src/lib/playroom/playroomState';
import * as themes from '../src/lib/themes';

import { darkMode } from '../src/lib/css/atoms/sprinkles.css';

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

const withTheme: Decorator = (Story, context) => {
  const themeName = context.globals.theme || 'apac';
  let theme = themes[themeName];

  if (!theme) {
    // eslint-disable-next-line no-console
    console.warn(`Theme "${themeName}" not found, using "apac" theme instead.`);
    theme = themes.apac;
  }

  const isDark = themeName === 'apacDark' || themeName === 'seekJobsDark';

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
          { value: 'wireframe', title: 'Wireframe' },
          { value: 'docs', title: 'Docs' },
        ],
      },
    },
  },
};

export default preview;
