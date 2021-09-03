import { darken, rgba } from 'polished';
import { palette } from '../../color/palette';
import { BraidTokens } from '../tokenType';

const brandAccent = palette.grey['900'];
const formAccent = palette.indigo['600'];
const focus = rgba('#1e90ff', 0.7);
const black = palette.grey['700'];
const white = '#fff';
const link = palette.indigo['600'];
const linkVisited = 'DarkViolet';
const secondary = palette.grey['500'];

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
      standard: '6px',
      large: '8px',
      xlarge: '12px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      brandAccent,
      caution: palette.yellow['600'],
      cautionLight: palette.yellow['300'],
      critical: palette.red['600'],
      criticalLight: palette.red['300'],
      field: palette.grey['400'],
      focus,
      formAccent,
      formHover: formAccent,
      info: palette.blue['600'],
      infoLight: palette.blue['300'],
      positive: palette.mint['600'],
      positiveLight: palette.mint['300'],
      promote: palette.purple['600'],
      promoteLight: palette.purple['300'],
      standard: palette.grey['200'],
      standardInverted: white,
    },
  },
  focusRingSize: 3,
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
      caution: palette.yellow['900'],
      critical: palette.red['700'],
      formAccent,
      info: palette.blue['700'],
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      positive: palette.mint['700'],
      promote: palette.purple['700'],
      rating: black,
      secondary,
      secondaryInverted: rgba('#fff', 0.65),
    },
    background: {
      body: white,
      brand: palette.grey['900'],
      brandAccent,
      brandAccentActive: brandAccent,
      brandAccentHover: palette.grey['700'],
      brandAccentSoft: palette.grey['200'],
      brandAccentSoftActive: darken(0.025, palette.grey['200']),
      brandAccentSoftHover: darken(0.05, palette.grey['200']),
      card: white,
      caution: palette.yellow['500'],
      cautionLight: palette.yellow['100'],
      critical: palette.red['600'],
      criticalActive: darken(0.075, palette.red['600']),
      criticalHover: darken(0.05, palette.red['600']),
      criticalLight: palette.red['100'],
      criticalSoft: palette.red['100'],
      criticalSoftActive: darken(0.05, palette.red['100']),
      criticalSoftHover: darken(0.025, palette.red['100']),
      formAccent,
      formAccentActive: palette.indigo['700'],
      formAccentDisabled: palette.grey['200'],
      formAccentHover: darken(0.05, palette.indigo['600']),
      formAccentSoft: palette.indigo['100'],
      formAccentSoftActive: darken(0.05, palette.indigo['100']),
      formAccentSoftHover: darken(0.025, palette.indigo['100']),
      info: palette.blue['600'],
      infoLight: palette.blue['100'],
      input: white,
      inputDisabled: palette.grey['200'],
      neutral: palette.grey['200'],
      neutralLight: palette.grey['100'],
      positive: palette.mint['600'],
      positiveLight: palette.mint['100'],
      promote: palette.purple['600'],
      promoteLight: palette.purple['100'],
      selection: palette.grey['100'],
    },
  },
};

export default tokens;
