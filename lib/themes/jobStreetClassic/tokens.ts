import { makeTokens } from '../baseTokens/seekAsia';

const brand = '#1c3f94';
const info = '#142d69';

export default makeTokens({
  name: 'jobStreetClassic',
  displayName: 'JobStreet (Classic)',
  bodyBackground: '#e5e5e5',
  brand,
  brandAccent: '#fff200',
  formAccent: brand,
  tokenOverrides: {
    typography: {
      fontFamily:
        '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      fontMetrics: {
        capHeight: 714,
        ascent: 952,
        descent: -213,
        lineGap: 28,
        unitsPerEm: 1000,
      },
      text: {
        xsmall: {
          mobile: {
            size: 11,
            rows: 4,
          },
          tablet: {
            size: 11,
            rows: 4,
          },
        },
        small: {
          mobile: {
            size: 12,
            rows: 5,
          },
          tablet: {
            size: 12,
            rows: 5,
          },
        },
        standard: {
          mobile: {
            size: 14,
            rows: 5,
          },
          tablet: {
            size: 14,
            rows: 5,
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
    border: {
      radius: {
        standard: '3px',
      },
    },
    color: {
      foreground: {
        info,
        link: '#1c3f94',
        linkHover: '#142d69',
      },
      background: {
        info,
        selection: '#e8ebf4',
      },
    },
  },
});
