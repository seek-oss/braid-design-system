import { defineVars, style } from '@mattsjones/css-core';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import { darken, lighten, rgba } from 'polished';
import { getLightVariant, isLight } from '../../utils';

const grid = 4;

const grey = {
  50: '#f5f6f8',
  100: '#e8eaee',
  200: '#d8dce2',
  300: '#b8beca',
  400: '#8991a5',
  500: '#596581',
  600: '#414a5f',
  700: '#313848',
  800: '#1e222b',
  900: '#0e1014',
};

const critical = '#d0011b';
const positive = '#138a08';
const info = '#1e468c';
const promote = '#9556b7';
const caution = '#ffc600';
const focus = rgba('#1e90ff', 0.7);
const black = grey['800'];
const white = '#fff';
const link = '#2765cf';
const linkVisited = '#733d90';
const secondary = grey['500'];
const brand = '#0d3880';
const brandAccent = '#e60278';
const formAccent = '#2765cf';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const backgroundColorTokens = {
  body: grey['50'],
  brand,
  input: white,
  inputDisabled: grey['50'],
  brandAccent,
  formAccent,
  formAccentDisabled: grey['100'],
  selection: grey['100'],
  card: white,
  critical,
  caution,
  positive,
  neutral: grey['500'],
  info,
  promote,
};

const tokens = {
  typography: {
    fontFamily:
      'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    fontMetrics: {
      capHeight: 1456,
      ascent: 1900,
      descent: -500,
      lineGap: 0,
      unitsPerEm: 2048,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            rows: 9,
          },
          tablet: {
            fontSize: 42,
            rows: 11,
          },
        },
        '2': {
          mobile: {
            fontSize: 21,
            rows: 8,
          },
          tablet: {
            fontSize: 28,
            rows: 9,
          },
        },
        '3': {
          mobile: {
            fontSize: 21,
            rows: 7,
          },
          tablet: {
            fontSize: 21,
            rows: 7,
          },
        },
        '4': {
          mobile: {
            fontSize: 18,
            rows: 7,
          },
          tablet: {
            fontSize: 18,
            rows: 7,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 12,
          rows: 5,
        },
        tablet: {
          fontSize: 12,
          rows: 5,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          rows: 5,
        },
        tablet: {
          fontSize: 14,
          rows: 5,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          rows: 6,
        },
        tablet: {
          fontSize: 16,
          rows: 6,
        },
      },
      large: {
        mobile: {
          fontSize: 18,
          rows: 7,
        },
        tablet: {
          fontSize: 18,
          rows: 7,
        },
      },
    },
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1280,
  },
  touchableSize: 11 * grid,
  space: {
    gutter: 6 * grid,
    xxsmall: grid,
    xsmall: 2 * grid,
    small: 3 * grid,
    medium: 5 * grid,
    large: 8 * grid,
    xlarge: 12 * grid,
    xxlarge: 24 * grid,
  },
  transforms: {
    touchable: 'scale(0.95)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '4px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: grey['200'],
      standardInverted: white,
      field: grey['400'],
      focus,
      formHover: formAccent,
      critical,
      info,
      promote,
      positive,
      caution,
      formAccent,
      brandAccent,
    },
  },
  shadows: {
    small: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 2px 2px -2px ${rgba(grey['800'], 0.1)}`,
      `0 4px 4px -4px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
    medium: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 8px 8px -4px ${rgba(grey['800'], 0.1)}`,
      `0 12px 12px -8px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
    large: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 12px 12px -4px ${rgba(grey['800'], 0.1)}`,
      `0 20px 20px -12px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
  },
  color: {
    background: {
      ...backgroundColorTokens,
      formAccentActive: getActiveColor(backgroundColorTokens.formAccent),
      formAccentHover: getHoverColor(backgroundColorTokens.formAccent),
      brandAccentActive: getActiveColor(backgroundColorTokens.brandAccent),
      brandAccentHover: getHoverColor(backgroundColorTokens.brandAccent),
      criticalActive: getActiveColor(backgroundColorTokens.critical),
      criticalHover: getHoverColor(backgroundColorTokens.critical),
      infoLight: getLightVariant(backgroundColorTokens.info),
      promoteLight: getLightVariant(backgroundColorTokens.promote),
      criticalLight: getLightVariant(backgroundColorTokens.critical),
      positiveLight: getLightVariant(backgroundColorTokens.positive),
      cautionLight: getLightVariant(backgroundColorTokens.caution),
      neutralLight: getLightVariant(backgroundColorTokens.neutral),
    },
    foreground: {
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent,
      brandAccent,
      critical,
      caution,
      positive,
      info,
      promote,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f57c00',
    },
  },
};

export const nextTheme = defineVars(tokens);

export type Theme = typeof nextTheme.vars;

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
};

const makeMediaQuery = (breakpoint: keyof typeof breakpoints) => (
  styles: StyleWithoutMediaQueries,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
};

type StyleRule = Parameters<typeof style>[0];

type StyleWithoutMediaQueries = Exclude<StyleRule['@media'], undefined>[string];

interface ResponsiveStyle {
  mobile?: StyleWithoutMediaQueries;
  tablet?: StyleWithoutMediaQueries;
  desktop?: StyleWithoutMediaQueries;
}

export const responsiveStyle = ({
  mobile,
  tablet,
  desktop,
}: ResponsiveStyle): StyleRule => {
  const mobileStyles = omit(mobile, '@media');

  const tabletStyles = !tablet || isEqual(tablet, mobileStyles) ? null : tablet;

  const stylesBelowDesktop = tabletStyles || mobileStyles;
  const desktopStyles =
    !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;

  const hasMediaQueries = tabletStyles || desktopStyles;

  return {
    ...mobileStyles,
    ...(hasMediaQueries
      ? {
          '@media': {
            ...(tabletStyles ? mediaQuery.tablet(tabletStyles) : {}),
            ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
          },
        }
      : {}),
  };
};
