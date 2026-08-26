import { palette } from 'braid-src/lib/color/palette';
import { darken } from 'polished';

type ColorPair = {
  rest: string;
  hover: string;
};

/**
 * Docs palette at rest, SEEK Jobs palette on hover.
 * Illustrations tag paths with a fill role; LandingCard themes set the canvas.
 */
export const illustrationFills = {
  accentSoft: {
    rest: palette.indigo['400'],
    hover: palette.seekPink['300'],
  },
  accent: {
    rest: palette.indigo['500'],
    hover: palette.seekPink['500'],
  },
  neutral: {
    rest: palette.grey['600'],
    hover: palette.seekBlue['700'],
  },
  neutralSubtle: {
    rest: palette.grey['500'],
    hover: palette.seekBlue['600'],
  },
  formAccent: {
    rest: palette.grey['600'],
    hover: palette.seekBlueLight['700'],
  },
} as const satisfies Record<string, ColorPair>;

export const illustrationThemes = {
  foundations: {
    rest: palette.grey['200'],
    hover: palette.seekBlue['700'],
  },
  components: {
    rest: palette.grey['100'],
    hover: darken(0.05, palette.seekPink['50']),
  },
  patterns: {
    rest: palette.grey['75'],
    hover: palette.seekBlueLight['700'],
  },
} as const satisfies Record<string, ColorPair>;

export type IllustrationFill = keyof typeof illustrationFills;
export type IllustrationTheme = keyof typeof illustrationThemes;
