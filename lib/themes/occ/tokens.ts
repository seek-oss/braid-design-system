import { TreatTokens } from '../makeBraidTheme';
import { lighten } from 'polished';

const brand = '#083cae';
const brandAccent = '#f13465';
const formAccent = brand;
const focus = lighten(0.5, brand);
const critical = '#db3737';
const positive = '#009537';
const caution = '#ffc549';
const info = '#0946CB';
const promote = '#5736ab';
const neutral = '#666';
const black = '#222';
const secondary = '#777';
const white = '#fff';
const link = '#0946CB';
const linkVisited = '#5736ab';

const tokens: TreatTokens = {
  name: 'OCC',
  displayName: 'OCC Mundial',
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    webFont: 'Open Sans',
    fontMetrics: {
      capHeight: 1462,
      ascent: 2189,
      descent: -600,
      lineGap: 0,
      unitsPerEm: 2048,
    },
    fontWeight: {
      regular: 400,
      medium: 600, // Not implemented rolling up to strong for consistency.
      strong: 600,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'strong',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            rows: 8,
          },
          tablet: {
            fontSize: 57,
            rows: 18,
          },
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 8,
          },
          tablet: {
            fontSize: 36,
            rows: 12,
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
            fontSize: 16,
            rows: 6,
          },
          tablet: {
            fontSize: 16,
            rows: 6,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 10,
          rows: 4,
        },
        tablet: {
          fontSize: 10,
          rows: 4,
        },
      },
      small: {
        mobile: {
          fontSize: 12,
          rows: 4,
        },
        tablet: {
          fontSize: 12,
          rows: 4,
        },
      },
      standard: {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 6,
        },
      },
      large: {
        mobile: {
          fontSize: 16,
          rows: 6,
        },
        tablet: {
          fontSize: 16,
          rows: 6,
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
    medium: 984,
    large: 1164,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 16,
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
      standard: '#dddddd',
      standardInverted: white,
      field: '#dddddd',
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
      info,
      promote,
      caution,
      positive,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f36e23',
    },
    background: {
      body: '#f5f5f8',
      brand,
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#fafafa',
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
