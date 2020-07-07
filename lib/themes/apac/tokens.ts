import { TreatTokens } from '../makeBraidTheme';
import { rgba } from 'polished';

const grey = {
  50: '#f5f6f8',
  100: '#e8eaee',
  200: '#d8dce2',
  300: '#b8beca',
  400: '#8991a5',
  500: '#596581',
  600: '#414a5f',
  700: '#313848',
  800: '#1e222b',
  900: '#0e1014',
} as const;

const formAccent = '#2765cf';
const critical = '#d0011b';
const positive = '#138a08';
const info = '#1e468c';
const promote = '#9556b7';
const caution = '#ffc600';
const brandAccent = '#e60278';
const focus = rgba('#1e90ff', 0.7);
const black = grey['800'];
const white = '#fff';
const link = '#2765cf';
const linkVisited = '#733d90';
const secondary = grey['500'];

const tokens: TreatTokens = {
  name: 'apac',
  displayName: 'APAC',
  typography: {
    fontFamily:
      'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    webFont: null,
    descenderHeightScale: 0.165,
    capHeightScale: 0.6,
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
            rows: 9,
          },
          tablet: {
            size: 42,
            rows: 11,
          },
        },
        '2': {
          mobile: {
            size: 21,
            rows: 8,
          },
          tablet: {
            size: 28,
            rows: 9,
          },
        },
        '3': {
          mobile: {
            size: 21,
            rows: 7,
          },
          tablet: {
            size: 21,
            rows: 7,
          },
        },
        '4': {
          mobile: {
            size: 18,
            rows: 7,
          },
          tablet: {
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
        tablet: {
          size: 12,
          rows: 5,
        },
      },
      small: {
        mobile: {
          size: 14,
          rows: 5,
        },
        tablet: {
          size: 14,
          rows: 5,
        },
      },
      standard: {
        mobile: {
          size: 16,
          rows: 6,
        },
        tablet: {
          size: 16,
          rows: 6,
        },
      },
      large: {
        mobile: {
          size: 18,
          rows: 7,
        },
        tablet: {
          size: 18,
          rows: 7,
        },
      },
    },
  },
  breakpoint: {
    mobile: 0,
    tablet: 740,
    desktop: 992,
  },
  contentWidth: {
    medium: 940,
    large: 1280,
  },
  grid: 4,
  touchableSize: 11,
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
    touchable: 'scale(0.95)',
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
      standard: grey['200'],
      standardInverted: white,
      field: grey['400'],
      focus,
      formHover: formAccent,
      critical,
      info,
      promote,
      positive,
      caution,
      formAccent,
    },
  },
  shadows: {
    small: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 2px 2px -2px ${rgba(grey['800'], 0.1)}`,
      `0 4px 4px -4px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
    medium: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 8px 8px -4px ${rgba(grey['800'], 0.1)}`,
      `0 12px 12px -8px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
    large: [
      `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
      `0 12px 12px -4px ${rgba(grey['800'], 0.1)}`,
      `0 20px 20px -12px ${rgba(grey['800'], 0.2)}`,
    ].join(', '),
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
      rating: '#f57c00',
    },
    background: {
      body: grey['50'],
      brand: '#0d3880',
      input: white,
      inputDisabled: grey['50'],
      brandAccent,
      formAccent,
      formAccentDisabled: grey['100'],
      selection: grey['100'],
      card: white,
      critical,
      caution,
      positive,
      neutral: grey['500'],
      info,
      promote,
    },
  },
};

export default tokens;
