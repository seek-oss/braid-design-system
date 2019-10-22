import { TreatTokens } from '../makeTreatTheme';
import { DeepPartial } from 'utility-types';
import merge from 'lodash/merge';

interface MakeTokensOptions {
  name: string;
  brand: string;
  brandAccent: string;
  formAccent: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}
export const makeTokens = ({
  name,
  brand,
  brandAccent,
  formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): TreatTokens => {
  const white = '#fff';
  const blue2 = '#298EB9';
  const blue3 = '#94C9E0';
  const alert = '#eb0000';
  const grey1 = '#333';
  const grey2 = '#666';
  const grey4 = '#ccc';
  const grey5 = '#eee';
  const candidate = '#0c4b85'; // SEEK Asia name for this color
  const info = candidate;
  const positive = '#498307';
  const critical = alert;
  const focus = blue3;
  const link = blue2;
  const linkHover = blue2;
  const secondary = grey2;
  const neutral = grey2;

  const tokens: TreatTokens = {
    name,
    typography: {
      fontFamily:
        'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      webFont: 'Muli',
      descenderHeightScale: 0.14,
      capHeightScale: 0.6,
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
              size: 28,
              rows: 9,
            },
            desktop: {
              size: 34,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              size: 24,
              rows: 8,
            },
            desktop: {
              size: 28,
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
          '4': {
            mobile: {
              size: 18,
              rows: 6,
            },
            desktop: {
              size: 18,
              rows: 6,
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
            rows: 6,
          },
          desktop: {
            size: 16,
            rows: 6,
          },
        },
        large: {
          mobile: {
            size: 18,
            rows: 6,
          },
          desktop: {
            size: 18,
            rows: 6,
          },
        },
      },
    },
    responsiveBreakpoint: 768,
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
        focus,
        critical,
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
        neutral: grey1,
        neutralInverted: white,
        formAccent,
        critical,
        info,
        positive,
        secondary,
      },
      background: {
        brand,
        input: white,
        inputDisabled: grey5,
        brandAccent,
        formAccent,
        formAccentDisabled: grey4,
        selection: grey5,
        card: white,
        critical,
        info,
        positive,
        neutral,
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
