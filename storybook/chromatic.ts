import type { breakpoints } from 'braid-design-system/css';
import docs from 'braid-design-system/themes/docs';
import seekBusiness from 'braid-design-system/themes/seekBusiness';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';

const themes = {
  docs,
  seekBusiness,
  seekJobs,
  wireframe,
};

import type { ColourMode } from './globalTypes';

type Mode =
  | { disabled: boolean }
  | { theme: string; viewport: number; colourMode?: ColourMode };
type Modes = Record<string, Mode>;
type ChromaticModesParameter = {
  modes: Modes;
};

type ViewportName = keyof typeof breakpoints;
const screenshotViewports: Record<ViewportName, number> = {
  mobile: 320,
  tablet: 768,
  desktop: 992,
  wide: 1200,
};
const defaultViewports: ViewportName[] = ['mobile'];
const allViewports = Object.keys(screenshotViewports) as ViewportName[];

const screenshotThemes = ['seekJobs', 'wireframe'];
const darkModeThemes = ['seekJobs'];

const themeNames = Object.keys(themes);

const screenshotThemesAreValid = screenshotThemes.every((theme) =>
  themeNames.includes(theme),
);

if (!screenshotThemesAreValid) {
  throw new Error(
    `screenshotThemes must be a subset of all themes: ${screenshotThemes.join(', ')}`,
  );
}

const darkModeThemesAreValid = darkModeThemes.every((theme) =>
  screenshotThemes.includes(theme),
);

if (!darkModeThemesAreValid) {
  throw new Error(
    `darkModeThemes must be a subset of screenshotThemes: ${darkModeThemes.join(', ')}`,
  );
}

/**
 * Returns themes, viewport and colour mode definitions as Chromatic Modes.
 * @see {@link https://www.chromatic.com/docs/modes/}
 */
export const setChromatic = (options?: {
  viewports?: ViewportName[];
  wireframeOnly?: boolean;
  root?: boolean;
}): ChromaticModesParameter => {
  const {
    viewports = defaultViewports,
    wireframeOnly = false,
    root = false,
  } = options || {};
  const modes: Modes = {};

  for (const theme of screenshotThemes) {
    for (const viewport of allViewports) {
      const disabled =
        (wireframeOnly && theme !== 'wireframe') ||
        (!wireframeOnly && theme === 'wireframe') ||
        !viewports.includes(viewport);

      if (root && disabled) {
        continue;
      }

      modes[`${theme} ${viewport}`] = disabled
        ? { disabled: true }
        : {
            theme,
            colourMode: 'light',
            viewport: screenshotViewports[viewport],
          };

      if (darkModeThemes.includes(theme)) {
        modes[`${theme}Dark ${viewport}`] = disabled
          ? { disabled: true }
          : {
              theme,
              colourMode: 'dark',
              viewport: screenshotViewports[viewport],
            };
      }
    }
  }

  return {
    modes,
  };
};
