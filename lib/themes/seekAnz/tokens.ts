import { TreatTokens } from '../makeTreatTheme';
import { rgba } from 'polished';

const focus = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';
const brand = '#0d3880';
const brandAccent = '#e60278';
const positive = '#169400';
const critical = brandAccent;
const info = '#9556b7';
const black = '#1c1c1c';
const link = '#2765cf';
const secondary = '#1c1c1ca1';

const tokens: TreatTokens = {
  name: 'seekAnz',
  typography: {
    fontFamily:
      'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    descenderHeightScale: 0.16,
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
            size: 28,
            rows: 6,
          },
          desktop: {
            size: 42,
            rows: 8,
          },
        },
        '2': {
          mobile: {
            size: 21,
            rows: 5,
          },
          desktop: {
            size: 28,
            rows: 6,
          },
        },
        '3': {
          mobile: {
            size: 21,
            rows: 5,
          },
          desktop: {
            size: 21,
            rows: 5,
          },
        },
        '4': {
          mobile: {
            size: 18,
            rows: 5,
          },
          desktop: {
            size: 18,
            rows: 5,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          size: 12,
          rows: 3,
        },
        desktop: {
          size: 12,
          rows: 3,
        },
      },
      small: {
        mobile: {
          size: 14,
          rows: 3,
        },
        desktop: {
          size: 14,
          rows: 3,
        },
      },
      standard: {
        mobile: {
          size: 16,
          rows: 4,
        },
        desktop: {
          size: 16,
          rows: 4,
        },
      },
      large: {
        mobile: {
          size: 18,
          rows: 5,
        },
        desktop: {
          size: 18,
          rows: 5,
        },
      },
    },
  },
  grid: {
    row: 6,
    column: 5,
  },
  responsiveBreakpoint: 740,
  spacing: {
    touchableRows: 8,
    row: {
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 6,
      xlarge: 8,
      xxlarge: 16,
    },
    column: {
      gutter: 5,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 6,
      xlarge: 8,
      xxlarge: 16,
    },
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
      standard: '2px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#d6d6d6',
      focus,
      critical,
      formAccent,
    },
  },
  shadows: {
    standard: '0 9px 30px rgba(0,0,0,.4)',
  },
  color: {
    foreground: {
      link,
      linkHover: link,
      neutral: black,
      neutralInverted: 'white',
      formAccent,
      critical,
      info,
      positive,
      secondary,
    },
    background: {
      brand,
      input: '#fff',
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#eee',
      card: '#fff',
      critical,
      info,
      positive,
      secondary,
    },
  },
};

export default tokens;
