import { makeTokens } from '../baseTokens/seekAsia';

const brand = '#1c3f94';
const info = '#142d69';

export default makeTokens({
  name: 'jobStreetClassic',
  brand,
  brandAccent: '#fff200',
  formAccent: brand,
  tokenOverrides: {
    typography: {
      fontFamily:
        '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      descenderHeightScale: 0.12,
      capHeightScale: 0.6,
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
