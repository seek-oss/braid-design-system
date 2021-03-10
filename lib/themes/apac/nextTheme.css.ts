import {
  createGlobalTheme,
  createThemeVars,
  style,
} from '@mattsjones/css-core';
import { FontMetrics, getCapHeight } from 'capsize';
import isEqual from 'lodash/isEqual';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import { darken, lighten, rgba } from 'polished';
import { computeValues } from '../../hooks/typography/capsize';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';
import { TextDefinition, TreatTokens } from '../makeBraidTheme';

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

const fontSizeToCapHeight = (
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;
  const mobileCapHeight =
    'fontSize' in mobile
      ? (getCapHeight({ fontSize: mobile.fontSize, fontMetrics }) as number)
      : mobile.capHeight;

  const tabletCapHeight =
    'fontSize' in tablet
      ? (getCapHeight({ fontSize: tablet.fontSize, fontMetrics }) as number)
      : tablet.capHeight;

  return {
    mobile: {
      capHeight: mobileCapHeight,
      leading: mobile.leading,
      capsizeValues: computeValues({
        capHeight: mobileCapHeight,
        leading: mobile.leading,
        fontMetrics,
      }),
    },
    tablet: {
      capHeight: tabletCapHeight,
      leading: tablet.leading,
      capsizeValues: computeValues({
        capHeight: tabletCapHeight,
        leading: tablet.leading,
        fontMetrics,
      }),
    },
  };
};

const normaliseSizingToCapHeight = (
  typography: Omit<TreatTokens['typography'], 'webFont'>,
) => {
  const { heading, text, fontMetrics } = typography;

  return {
    ...typography,
    heading: {
      ...heading,
      level: {
        ...mapValues(heading.level, (definition) =>
          fontSizeToCapHeight(definition, fontMetrics),
        ),
      },
    },
    text: {
      ...text,
      ...mapValues(text, (definition) =>
        fontSizeToCapHeight(definition, fontMetrics),
      ),
    },
  };
};

const tokens = {
  typography: normaliseSizingToCapHeight({
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
        weak: 'regular' as const,
        regular: 'medium' as const,
      },
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            leading: 9 * grid,
          },
          tablet: {
            fontSize: 42,
            leading: 11 * grid,
          },
        },
        '2': {
          mobile: {
            fontSize: 21,
            leading: 8 * grid,
          },
          tablet: {
            fontSize: 28,
            leading: 9 * grid,
          },
        },
        '3': {
          mobile: {
            fontSize: 21,
            leading: 7 * grid,
          },
          tablet: {
            fontSize: 21,
            leading: 7 * grid,
          },
        },
        '4': {
          mobile: {
            fontSize: 18,
            leading: 7 * grid,
          },
          tablet: {
            fontSize: 18,
            leading: 7 * grid,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 12,
          leading: 5 * grid,
        },
        tablet: {
          fontSize: 12,
          leading: 5 * grid,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          leading: 5 * grid,
        },
        tablet: {
          fontSize: 14,
          leading: 5 * grid,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          leading: 6 * grid,
        },
        tablet: {
          fontSize: 16,
          leading: 6 * grid,
        },
      },
      large: {
        mobile: {
          fontSize: 18,
          leading: 7 * grid,
        },
        tablet: {
          fontSize: 18,
          leading: 7 * grid,
        },
      },
    },
  }),
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
      critical4_51: getAccessibleVariant(critical),
      critical3_1: getAccessibleVariant(critical, { nonText: true }),
      caution,
      caution4_51: getAccessibleVariant(caution),
      caution3_1: getAccessibleVariant(caution, { nonText: true }),
      positive,
      positive4_51: getAccessibleVariant(positive),
      positive3_1: getAccessibleVariant(positive, { nonText: true }),
      info,
      info4_51: getAccessibleVariant(info),
      info3_1: getAccessibleVariant(info, { nonText: true }),
      promote,
      promote4_51: getAccessibleVariant(promote),
      promote3_1: getAccessibleVariant(promote, { nonText: true }),
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f57c00',
    },
  },
};

export const theme = createThemeVars(tokens);

createGlobalTheme(':root', theme, tokens);

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

export function styleMap<Key extends string | number>(
  styles: Record<Key, StyleRule>,
) {
  return mapValues(styles, (s) => style(s));
}

const subCalc = (calc: string | number) =>
  typeof calc === 'number' ? calc : calc.replace(/calc/g, '');

export const subtract = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} - ${subCalc(b)})`;

export const add = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} + ${subCalc(b)})`;

export const multiply = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} * ${subCalc(b)})`;

export const negate = (v: string | number) => multiply(v, -1);

export const divide = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} / ${subCalc(b)})`;
