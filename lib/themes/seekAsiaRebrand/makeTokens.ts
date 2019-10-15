import { TreatTokens } from '../makeTreatTheme';
import { DeepPartial } from 'utility-types';
import merge from 'lodash/merge';
import palette from './palette';
import { lighten } from 'polished';

interface SeekAsiaBrandTokens {
  name: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}
export default ({
  name,
  tokenOverrides = {},
}: SeekAsiaBrandTokens): TreatTokens => {
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
            rows: 5,
          },
          desktop: {
            size: 16,
            rows: 5,
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
    touchableSize: 12,
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
        baller: '8px',
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
      large: '0 9px 30px rgba(0,0,0,.4)',
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
