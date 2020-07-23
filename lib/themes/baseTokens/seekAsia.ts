import { TreatTokens } from '../makeBraidTheme';
import { DeepPartial } from 'utility-types';
import merge from 'lodash/merge';

interface MakeTokensOptions {
  name: string;
  displayName: string;
  bodyBackground: string;
  brand: string;
  brandAccent: string;
  formAccent: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}
export const makeTokens = ({
  name,
  displayName,
  bodyBackground,
  brand,
  brandAccent,
  formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): TreatTokens => {
  const white = '#fff';
  const blue2 = '#298EB9';
  const blue3 = '#94C9E0';
  const blue5 = '#EEF8FC';
  const alert = '#eb0000';
  const grey1 = '#333';
  const grey2 = '#666';
  const grey4 = '#ccc';
  const grey5 = '#eee';
  const candidate = '#0c4b85'; // SEEK Asia name for this color
  const info = candidate;
  const promote = '#923f92';
  const positive = '#498307';
  const critical = alert;
  const caution = '#ffc600';
  const focus = blue3;
  const link = blue2;
  const linkHover = blue2;
  const linkVisited = '#3f11a3';
  const selection = blue5;
  const secondary = grey2;
  const neutral = grey2;

  const tokens: TreatTokens = {
    name,
    displayName,
    typography: {
      fontFamily:
        'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      webFont: 'Muli',
      fontMetrics: {
        capHeight: 712,
        ascent: 1005,
        descent: -250,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      fontWeight: {
        regular: 400,
        medium: 600,
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
              capHeight: 20,
              rows: 9,
            },
            tablet: {
              capHeight: 24,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              capHeight: 17,
              rows: 8,
            },
            tablet: {
              capHeight: 20,
              rows: 9,
            },
          },
          '3': {
            mobile: {
              capHeight: 14,
              rows: 7,
            },
            tablet: {
              capHeight: 17,
              rows: 8,
            },
          },
          '4': {
            mobile: {
              capHeight: 13,
              rows: 6,
            },
            tablet: {
              capHeight: 13,
              rows: 6,
            },
          },
        },
      },
      text: {
        xsmall: {
          mobile: {
            capHeight: 9,
            rows: 4,
          },
          tablet: {
            capHeight: 9,
            rows: 4,
          },
        },
        small: {
          mobile: {
            capHeight: 10,
            rows: 5,
          },
          tablet: {
            capHeight: 10,
            rows: 5,
          },
        },
        standard: {
          mobile: {
            capHeight: 12,
            rows: 6,
          },
          tablet: {
            capHeight: 12,
            rows: 6,
          },
        },
        large: {
          mobile: {
            capHeight: 13,
            rows: 6,
          },
          tablet: {
            capHeight: 13,
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
      medium: 940,
      large: 1280,
    },
    grid: 4,
    touchableSize: 10,
    space: {
      gutter: 5,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 6,
      xlarge: 8,
      xxlarge: 16,
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
        standard: '4px',
      },
      width: {
        standard: 1,
        large: 2,
      },
      color: {
        standard: grey4,
        standardInverted: white,
        field: grey4,
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
        linkHover,
        linkVisited,
        neutral: grey1,
        neutralInverted: white,
        formAccent,
        critical,
        caution,
        positive,
        info,
        promote,
        secondary,
        secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
        rating: '#ff9000',
      },
      background: {
        body: bodyBackground,
        brand,
        input: white,
        inputDisabled: grey5,
        brandAccent,
        formAccent,
        formAccentDisabled: grey4,
        selection,
        card: white,
        critical,
        caution,
        positive,
        neutral,
        info,
        promote,
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
