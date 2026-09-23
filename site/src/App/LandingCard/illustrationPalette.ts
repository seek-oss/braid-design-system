import { palette } from 'braid-src/lib/color/palette';

export type AdaptiveColor = {
  light: string;
  dark: string;
};

type ColorPair = {
  rest: AdaptiveColor;
  hover: AdaptiveColor;
};

/**
 * Docs palette at rest, SEEK Jobs palette on hover.
 * Each value is a light/dark pair so illustrations follow color mode.
 */
export const illustrationFills = {
  accentSoft: {
    rest: {
      light: palette.indigo['400'],
      dark: palette.indigo['300'],
    },
    hover: {
      light: palette.seekPink['300'],
      dark: palette.seekPink['400'],
    },
  },
  accent: {
    rest: {
      light: palette.indigo['500'],
      dark: palette.indigo['400'],
    },
    hover: {
      light: palette.seekPink['500'],
      dark: palette.seekPink['300'],
    },
  },
  neutral: {
    rest: {
      light: palette.grey['600'],
      dark: palette.grey['400'],
    },
    hover: {
      light: palette.seekBlue['700'],
      dark: palette.seekBlueLight['300'],
    },
  },
  neutralSubtle: {
    rest: {
      light: palette.grey['500'],
      dark: palette.grey['500'],
    },
    hover: {
      light: palette.seekBlue['600'],
      dark: palette.seekBlueLight['400'],
    },
  },
} as const satisfies Record<string, ColorPair>;

export const illustrationCanvas = {
  rest: {
    light: palette.grey['100'],
    dark: palette.grey['800'],
  },
  hover: {
    light: palette.seekPink['50'],
    dark: palette.seekPink['900'],
  },
} as const satisfies ColorPair;
