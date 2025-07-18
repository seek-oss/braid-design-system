import type { breakpointNames } from './../src/lib/css/breakpoints';
import * as allThemes from './../src/lib/themes';

type Mode =
  | { disabled: boolean }
  | { theme: string; viewport: number; darkMode?: boolean };
type Modes = Record<string, Mode>;
type ChromaticModesParameter = {
  modes: Modes;
};

type ViewportName = (typeof breakpointNames)[number];
const screenshotViewports: Record<ViewportName, number> = {
  mobile: 320,
  tablet: 768,
  desktop: 992,
  wide: 1200,
};
const defaultViewports: ViewportName[] = ['mobile'];
const allViewports = Object.keys(screenshotViewports) as ViewportName[];

const allThemeNames = Object.keys(allThemes);
const screenshotThemes = allThemeNames.filter(
  (themeName) => themeName !== 'docs' && themeName !== 'seekBusiness',
);
const darkModeThemes = ['seekJobs'];

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
            darkMode: false,
            viewport: screenshotViewports[viewport],
          };

      if (darkModeThemes.includes(theme)) {
        modes[`${theme}Dark ${viewport}`] = disabled
          ? { disabled: true }
          : {
              theme,
              darkMode: true,
              viewport: screenshotViewports[viewport],
            };
      }
    }
  }

  return {
    modes,
  };
};
