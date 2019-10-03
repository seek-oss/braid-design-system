import makeTokens from '../seekAsia/makeTokens';

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
      text: {
        xsmall: {
          mobile: {
            size: 11,
            rows: 4,
          },
          desktop: {
            size: 11,
            rows: 4,
          },
        },
        small: {
          mobile: {
            size: 12,
            rows: 5,
          },
          desktop: {
            size: 12,
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
