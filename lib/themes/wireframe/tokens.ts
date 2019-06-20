import { TreatTokens } from '../makeTreatTheme';

const formAccent = 'black';
const critical = 'red';
const positive = 'green';
const info = 'navy';
const brandAccent = 'DarkOrange';
const focus = 'DeepSkyBlue';
const black = '#2b2b2b';
const white = '#fff';
const link = '#4c77bb';

const tokens: TreatTokens = {
  name: 'wireframe',
  typography: {
    fontFamily: 'Courier, monospace',
    descenderHeightScale: 0.16,
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
      },
    },
    text: {
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
          rows: 4,
        },
        desktop: {
          size: 18,
          rows: 4,
        },
      },
    },
  },
  grid: {
    row: 6,
    column: 5,
  },
  responsiveBreakpoint: 768,
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
      focus,
      critical,
      formAccent,
    },
  },
  color: {
    foreground: {
      link,
      linkHover: link,
      black,
      neutral: black,
      formAccent,
      critical,
      info,
      positive,
      secondary: '#777',
      white,
    },
    background: {
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#eee',
      card: white,
      critical,
      info,
      positive,
    },
  },
};

export default tokens;
