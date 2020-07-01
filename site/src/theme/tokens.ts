import { TreatTokens } from '../../../lib/themes/makeBraidTheme';

const formAccent = '#0049bd';
const critical = '#ef3e4a';
const positive = '#00af50';
const info = '#2c88f7';
const promote = '#855be5';
const caution = '#ffc600';
const brandAccent = '#111';
const focus = 'DeepSkyBlue';
const black = '#333';
const white = '#fff';
const link = formAccent;
const linkVisited = 'DarkViolet';
const secondary = '#1c1c1ca1';
const neutral = '#747474';

const tokens: TreatTokens = {
  name: 'Braid',
  displayName: 'Braid',
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webFont: null,
    descenderHeightScale: 0.13,
    capHeightScale: 0.7,
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
            size: 32,
            rows: 12,
          },
          tablet: {
            size: 52,
            rows: 16,
          },
        },
        '2': {
          mobile: {
            size: 28,
            rows: 11,
          },
          tablet: {
            size: 42,
            rows: 16,
          },
        },
        '3': {
          mobile: {
            size: 22,
            rows: 9,
          },
          tablet: {
            size: 22,
            rows: 9,
          },
        },
        '4': {
          mobile: {
            size: 18,
            rows: 8,
          },
          tablet: {
            size: 18,
            rows: 8,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          size: 14,
          rows: 6,
        },
        tablet: {
          size: 14,
          rows: 6,
        },
      },
      small: {
        mobile: {
          size: 16,
          rows: 6,
        },
        tablet: {
          size: 16,
          rows: 6,
        },
      },
      standard: {
        mobile: {
          size: 18,
          rows: 8,
        },
        tablet: {
          size: 18,
          rows: 8,
        },
      },
      large: {
        mobile: {
          size: 22,
          rows: 9,
        },
        tablet: {
          size: 22,
          rows: 9,
        },
      },
    },
  },
  breakpoint: {
    mobile: 0,
    tablet: 768,
    desktop: 992,
  },
  contentWidth: {
    medium: 940,
    large: 1280,
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
    xlarge: 12,
    xxlarge: 24,
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
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#d6d6d6',
      standardInverted: white,
      field: '#777',
      focus,
      critical,
      info,
      promote,
      positive,
      caution,
      formHover: formAccent,
      formAccent,
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
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent,
      critical,
      caution,
      positive,
      info,
      promote,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: black,
    },
    background: {
      body: white,
      brand: black,
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f1f7ff',
      card: white,
      critical,
      caution,
      positive,
      neutral,
      info,
      promote,
    },
  },
};

export default tokens;
