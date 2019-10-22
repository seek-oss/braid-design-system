import { TreatTokens } from '../makeTreatTheme';
import { DeepPartial } from 'utility-types';
import merge from 'lodash/merge';
import { lighten } from 'polished';

const palette = {
  // Brand
  formAccent: '#0d00ec',
  saBlue: '#282acc',
  saBlueDark: '#1d307F',
  saBlueLight: '#4799D3',
  saPurple: '#3f11a3',
  saPurpleDark: '#8318B6',

  // Buttons & Filters
  saCta: '#e50379',
  saLink: '#0068ff',

  // Grayscale
  saBlack: '#000',
  saGrayDarker: '#333',
  saGrayDark: '#5e5f66',
  saGray: '#989ba2',
  saGrayLight: '#d2d6de',
  saGrayLighter: '#edeff3',
  saOffWhite: '#f4f5f7',
  saWhite: '#fff',

  // Tones
  critical: '#d30b41',
  notice: '#ffc842',
  positive: '#028616',
  neutral: '#989ba2',
  // Desired `info` colour is `#4799d3`, however white text is in-accessible on this.
  // The closest colour that meets a contrast ratio of 4.51 is `#2B7CB6`.
  info: '#2B7CB6',
  promote: '#5f37b7',
};

interface MakeTokensOptions {
  name: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}
export const makeTokens = ({
  name,
  tokenOverrides = {},
}: MakeTokensOptions): TreatTokens => {
  const brandAccent = palette.saCta;
  const brand = palette.saBlue;
  const critical = palette.critical;
  const positive = palette.positive;
  const info = palette.info;
  const neutral = palette.neutral;
  const white = palette.saWhite;
  const formAccent = palette.formAccent;
  const link = palette.saLink;
  const disabled = palette.saGrayLight;
  const textNeutral = palette.saGrayDarker;
  const secondary = palette.saGrayDark;
  const focus = lighten(0.3, palette.saBlueLight);
  const selection = lighten(0.3, palette.saBlueLight);

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
              size: 20,
              rows: 7,
            },
            desktop: {
              size: 20,
              rows: 7,
            },
          },
          '4': {
            mobile: {
              size: 18,
              rows: 7,
            },
            desktop: {
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
            rows: 7,
          },
          desktop: {
            size: 18,
            rows: 7,
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
    touchableSize: 11,
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
        standard: palette.saGrayLight,
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
        linkHover: link,
        neutral: textNeutral,
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
        inputDisabled: disabled,
        brandAccent,
        formAccent,
        formAccentDisabled: disabled,
        selection,
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
