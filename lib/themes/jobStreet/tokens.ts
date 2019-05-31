import { TreatTokens } from '../makeTreatTheme';
import { rgba } from 'polished';

const focus = rgba('#428bca', 0.7);
const formAccent = '#142d69';
const critical = '#eb0000';
const info = '#142d69';
const positive = 'green';
const brandAccent = '#fff200';
const black = '#333';

const tokens: TreatTokens = {
  name: 'jobStreet',
  typography: {
    fontFamily: '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    descenderHeightScale: 0.13,
    fontWeight: {
      regular: 400,
      medium: 500,
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
            size: 28,
            rows: 9,
          },
          desktop: {
            size: 36,
            rows: 11,
          },
        },
        '2': {
          mobile: {
            size: 24,
            rows: 8,
          },
          desktop: {
            size: 30,
            rows: 9,
          },
        },
        '3': {
          mobile: {
            size: 20,
            rows: 7,
          },
          desktop: {
            size: 24,
            rows: 8,
          },
        },
      },
    },
    text: {
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
          size: 14,
          rows: 5,
        },
        desktop: {
          size: 14,
          rows: 5,
        },
      },
      large: {
        mobile: {
          size: 16,
          rows: 6,
        },
        desktop: {
          size: 16,
          rows: 6,
        },
      },
    },
  },
  grid: {
    row: 4,
    column: 4,
  },
  responsiveBreakpoint: 768,
  spacing: {
    touchableRows: 11,
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
    touchable: 'scale(0.98)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '3px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#ccc',
      focus,
      critical,
      formAccent,
    },
  },
  color: {
    foreground: {
      link: '#1c3f94',
      linkHover: '#142d69',
      black,
      neutral: black,
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#333333b3',
      white: 'white',
    },
    background: {
      input: 'white',
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#E8EBF4',
      card: '#fff',
      critical,
      info,
      positive,
    },
  },
};

export default tokens;
