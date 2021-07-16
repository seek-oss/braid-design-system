import { darken, lighten, rgba } from 'polished';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';

import { BraidTokens } from '../tokenType';

const formAccent = '#0049bd';
const critical = '#ef0036';
const positive = '#00af50';
const info = '#0065de';
const promote = '#855be5';
const caution = '#ffc600';
const brandAccent = '#1a1a1a';
const focus = rgba('#1e90ff', 0.7);
const black = '#333';
const white = '#fff';
const link = formAccent;
const linkVisited = 'DarkViolet';
const secondary = '#757575';
const neutral = '#c0c0c0';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const tokens: BraidTokens = {
  name: 'docs',
  displayName: 'Docs',
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webFont: null,
    fontMetrics: {
      capHeight: 1443,
      ascent: 1950,
      descent: -494,
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
        regular: 'strong',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 32,
            rows: 10,
          },
          tablet: {
            fontSize: 52,
            rows: 15,
          },
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 9,
          },
          tablet: {
            fontSize: 38,
            rows: 13,
          },
        },
        '3': {
          mobile: {
            fontSize: 22,
            rows: 8,
          },
          tablet: {
            fontSize: 22,
            rows: 8,
          },
        },
        '4': {
          mobile: {
            fontSize: 18,
            rows: 8,
          },
          tablet: {
            fontSize: 18,
            rows: 8,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 6,
        },
      },
      small: {
        mobile: {
          fontSize: 16,
          rows: 6,
        },
        tablet: {
          fontSize: 16,
          rows: 6,
        },
      },
      standard: {
        mobile: {
          fontSize: 18,
          rows: 8,
        },
        tablet: {
          fontSize: 18,
          rows: 8,
        },
      },
      large: {
        mobile: {
          fontSize: 22,
          rows: 9,
        },
        tablet: {
          fontSize: 22,
          rows: 9,
        },
      },
    },
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1308,
  },
  grid: 4,
  touchableSize: 12,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 5,
    large: 8,
    xlarge: 11,
    xxlarge: 15,
  },
  transforms: {
    touchable: 'scale(0.97)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '8px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#d6d6d6',
      standardInverted: white,
      field: '#bbb',
      focus,
      critical,
      info,
      promote,
      positive,
      caution,
      formHover: formAccent,
      formAccent,
      brandAccent,
    },
  },
  shadows: {
    small:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)',
  },
  color: {
    foreground: {
      brandAccent,
      caution: getAccessibleVariant(caution, 'text'),
      critical: getAccessibleVariant(critical, 'text'),
      formAccent,
      info: getAccessibleVariant(info, 'text'),
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      positive: getAccessibleVariant(positive, 'text'),
      promote: getAccessibleVariant(promote, 'text'),
      rating: black,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    },
    background: {
      body: white,
      brand: black,
      brandAccent,
      brandAccentActive: getActiveColor(brandAccent),
      brandAccentHover: getHoverColor(brandAccent),
      card: white,
      caution,
      cautionLight: getLightVariant(caution),
      critical,
      criticalActive: getActiveColor(critical),
      criticalHover: getHoverColor(critical),
      criticalLight: getLightVariant(critical),
      formAccent,
      formAccentActive: getActiveColor(formAccent),
      formAccentDisabled: '#ccc',
      formAccentHover: getHoverColor(formAccent),
      info,
      infoLight: getLightVariant(info),
      input: white,
      inputDisabled: '#eee',
      neutral,
      neutralLight: getLightVariant(neutral),
      positive,
      positiveLight: getLightVariant(positive),
      promote,
      promoteLight: getLightVariant(promote),
      selection: '#f2f2f2',
    },
  },
};

export default tokens;
