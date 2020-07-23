import { TreatTokens } from '../makeBraidTheme';

const linkVisited = 'DarkViolet';

const brand = '#1250C4';
const brandAccent = '#de0059';
const formAccent = brand;
const focus = brand;
const critical = '#e91b0c';
const positive = '#3b610f';
const caution = '#ffc600';
const info = brand;
const promote = '#5736ab';
const neutral = '#424242';
const secondary = '#737374';
const white = '#fff';
const link = brand;

const tokens: TreatTokens = {
  name: 'Catho',
  displayName: 'Catho',
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    webFont: 'Nunito Sans',
    fontMetrics: {
      capHeight: 705,
      ascent: 1011,
      descent: -353,
      lineGap: 0,
      unitsPerEm: 1000,
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 800,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      },
      level: {
        '1': {
          mobile: {
            capHeight: 25,
            rows: 12,
          },
          tablet: {
            capHeight: 25,
            rows: 12,
          },
        },
        '2': {
          mobile: {
            capHeight: 20,
            rows: 10,
          },
          tablet: {
            capHeight: 20,
            rows: 10,
          },
        },
        '3': {
          mobile: {
            capHeight: 17,
            rows: 9,
          },
          tablet: {
            capHeight: 17,
            rows: 9,
          },
        },
        '4': {
          mobile: {
            capHeight: 14,
            rows: 7,
          },
          tablet: {
            capHeight: 14,
            rows: 7,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          capHeight: 9,
          rows: 4,
        },
        tablet: {
          capHeight: 9,
          rows: 4,
        },
      },
      small: {
        mobile: {
          capHeight: 10,
          rows: 4,
        },
        tablet: {
          capHeight: 10,
          rows: 4,
        },
      },
      standard: {
        mobile: {
          capHeight: 11,
          rows: 6,
        },
        tablet: {
          capHeight: 11,
          rows: 6,
        },
      },
      large: {
        mobile: {
          capHeight: 13,
          rows: 6,
        },
        tablet: {
          capHeight: 13,
          rows: 6,
        },
      },
    },
  },
  breakpoint: {
    mobile: 0,
    tablet: 600,
    desktop: 1024,
  },
  contentWidth: {
    medium: 984,
    large: 1180,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 12,
    xxlarge: 20,
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
      standard: '#e0e0e0',
      standardInverted: white,
      field: '#999999',
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
      neutral,
      neutralInverted: white,
      formAccent,
      critical,
      info,
      promote,
      caution,
      positive,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f36e23',
    },
    background: {
      body: '#f2f2f2',
      brand: '#0037e9',
      input: white,
      inputDisabled: '#f2f2f2',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f2f2f2',
      card: white,
      critical,
      caution,
      info,
      promote,
      positive,
      neutral,
    },
  },
};

export default tokens;
