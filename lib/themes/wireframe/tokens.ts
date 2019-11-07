import { TreatTokens } from '../makeTreatTheme';

const formAccent = '#404040';
const critical = 'red';
const positive = 'green';
const info = 'navy';
const promote = 'purple';
const brandAccent = 'black';
const focus = 'DeepSkyBlue';
const black = '#2b2b2b';
const white = '#fff';
const link = '#4c77bb';
const secondary = '#777';
const neutral = '#777';

const tokens: TreatTokens = {
  name: 'wireframe',
  typography: {
    fontFamily: 'Courier, monospace',
    webFont: null,
    descenderHeightScale: 0.16,
    capHeightScale: 0.502,
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
            size: 28,
            rows: 9,
          },
          desktop: {
            size: 42,
            rows: 11,
          },
        },
        '2': {
          mobile: {
            size: 21,
            rows: 8,
          },
          desktop: {
            size: 28,
            rows: 9,
          },
        },
        '3': {
          mobile: {
            size: 21,
            rows: 7,
          },
          desktop: {
            size: 21,
            rows: 7,
          },
        },
        '4': {
          mobile: {
            size: 18,
            rows: 7,
          },
          desktop: {
            size: 18,
            rows: 7,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          size: 12,
          rows: 5,
        },
        desktop: {
          size: 12,
          rows: 5,
        },
      },
      small: {
        mobile: {
          size: 14,
          rows: 5,
        },
        desktop: {
          size: 14,
          rows: 5,
        },
      },
      standard: {
        mobile: {
          size: 16,
          rows: 6,
        },
        desktop: {
          size: 16,
          rows: 6,
        },
      },
      large: {
        mobile: {
          size: 18,
          rows: 7,
        },
        desktop: {
          size: 18,
          rows: 7,
        },
      },
    },
  },
  responsiveBreakpoint: 768,
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
      standard: '4px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#777',
      standardInverted: white,
      focus,
      critical,
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
      neutral: black,
      neutralInverted: white,
      formAccent,
      critical,
      info,
      promote,
      positive,
      secondary,
    },
    background: {
      brand: black,
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f1f7ff',
      card: white,
      critical,
      info,
      promote,
      positive,
      neutral,
    },
  },
};

export default tokens;
