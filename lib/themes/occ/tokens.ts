import { TreatTokens } from '../makeBraidTheme';

const linkVisited = 'DarkViolet';

const brand = '#083cae';
const brandAccent = '#f13465';
const formAccent = brand; // or should it be '#1476fb' (also check was green #09ba8a)
const focus = brand;
const critical = '#db3737';
const positive = '#009537';
const caution = '#ffc549';
const info = '#0946CB';
const promote = '#5736ab'; // moved info to promote
const neutral = '#666';
const black = '#222';
const secondary = '#777';
const white = '#fff';
const link = '#0946CB';

const tokens: TreatTokens = {
  name: 'OCC',
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    webFont: 'Open Sans',
    descenderHeightScale: 0.12,
    capHeightScale: 0.58,
    fontWeight: {
      regular: 400,
      medium: 500, // not currently used
      strong: 600,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'strong',
      },
      level: {
        '1': {
          // Level 1 same as 2 currently
          mobile: {
            size: 28,
            rows: 8,
          },
          tablet: {
            size: 28,
            rows: 8,
          },
        },
        '2': {
          mobile: {
            size: 28,
            rows: 8,
          },
          tablet: {
            size: 28,
            rows: 8,
          },
        },
        '3': {
          mobile: {
            size: 22,
            rows: 8,
          },
          tablet: {
            size: 22,
            rows: 8,
          },
        },
        '4': {
          mobile: {
            size: 16,
            rows: 6,
          },
          tablet: {
            size: 16,
            rows: 6,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          size: 10,
          rows: 4,
        },
        tablet: {
          size: 10,
          rows: 4,
        },
      },
      small: {
        mobile: {
          size: 12,
          rows: 4,
        },
        tablet: {
          size: 14,
          rows: 4,
        },
      },
      standard: {
        mobile: {
          size: 14,
          rows: 6,
        },
        tablet: {
          size: 14,
          rows: 6,
        },
      },
      large: {
        mobile: {
          size: 16,
          rows: 6,
        },
        tablet: {
          size: 16,
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
    medium: 1140,
    large: 1280, // TBD
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
    },
    background: {
      body: '#f5f5f8',
      brand,
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f1f7ff',
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
