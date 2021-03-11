import { createThemeVars, createTheme } from '@mattsjones/css-core';

const fontWeightPalette = createThemeVars({
  regular: null,
  medium: null,
  strong: null,
});

const colourPalette = createThemeVars({
  formAccent: null,
  critical: null,
  positive: null,
  info: null,
  promote: null,
  caution: null,
  brandAccent: null,
  focus: null,
  black: null,
  white: null,
  link: null,
  linkVisited: null,
  secondary: null,
  neutral: null,
});

const headingPalette = createThemeVars({
  heading: {
    weight: {
      weak: keyof typeof fontWeightPalette,
      regular: keyof typeof fontWeightPalette,
    },
    level: {
      '1': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '2': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '3': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '4': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
    },
  },
});

interface Tokens {
  fontWeight: Record<keyof typeof fontWeightPalette, string>
  heading: {
    weight: {
      weak: keyof typeof fontWeightPalette,
      regular: keyof typeof fontWeightPalette,
    },
    level: {
      '1': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '2': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '3': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
      '4': {
        mobile: {
          fontSize: number;
          leading: number;
        },
        tablet: {
          fontSize: number;
          leading: number;
        },
      },
    },
  },
}

export default (tokens: Tokens) => {
  const theme = {};

  return createTheme(theme, tokens);
};
