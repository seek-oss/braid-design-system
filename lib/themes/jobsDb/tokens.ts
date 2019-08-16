import makeTokens from '../seekAsia/makeTokens';

const teal = '#0e7e8b';
const blue = '#0c4b85';

export default makeTokens({
  name: 'jobsDb',
  brand: `linear-gradient(90deg, ${teal}, ${blue})`,
  formAccent: blue,
  brandAccent: '#ff9000',
  tokenOverrides: {
    typography: {
      fontWeight: {
        regular: 400,
        medium: 500,
        strong: 900,
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
              size: 48,
              rows: 15,
            },
          },
          '2': {
            mobile: {
              size: 24,
              rows: 8,
            },
            desktop: {
              size: 32,
              rows: 10,
            },
          },
          '3': {
            mobile: {
              size: 18,
              rows: 7,
            },
            desktop: {
              size: 20,
              rows: 7,
            },
          },
        },
      },
      text: {
        xsmall: {
          mobile: {
            size: 12,
            rows: 4,
          },
          desktop: {
            size: 12,
            rows: 4,
          },
        },
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
            size: 16,
            rows: 5,
          },
          desktop: {
            size: 16,
            rows: 5,
          },
        },
        large: {
          mobile: {
            size: 16,
            rows: 6,
          },
          desktop: {
            size: 18,
            rows: 7,
          },
        },
      }
    }
  }
});
