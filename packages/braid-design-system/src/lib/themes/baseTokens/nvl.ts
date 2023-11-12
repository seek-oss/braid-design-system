import type { DeepPartial } from 'utility-types';
import { darken, lighten, rgba, saturate } from 'polished';
import merge from 'lodash/merge';
import { palette } from '../../color/palette';
import type { BraidTokens } from '../tokenType';

interface MakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  brandAccent: string;
  brandAccentLight: string;
  brandAccentActive: string;
  brandAccentHover: string;
  brandAccentSoft: string;
  brandAccentSoftActive: string;
  brandAccentSoftHover: string;
  tokenOverrides?: DeepPartial<BraidTokens>;
}

export const makeTokens = ({
  name,
  displayName,
  brand,
  brandAccent,
  brandAccentLight,
  brandAccentActive,
  brandAccentHover,
  brandAccentSoft,
  brandAccentSoftActive,
  brandAccentSoftHover,
  tokenOverrides = {},
}: MakeTokensOptions): BraidTokens => {
  const critical = palette.red['700'];
  const white = '#fff';

  const tokens: BraidTokens = {
    name,
    displayName,
    legacy: false,
    typography: {
      fontFamily: 'SeekSans, "SeekSans Fallback", Arial',
      webFont: 'https://www.seek.com.au/static/shared-web/seeksans.css',
      fontMetrics: {
        capHeight: 783,
        ascent: 1057,
        descent: -274,
        lineGap: 0,
        unitsPerEm: 1000,
      },
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
              fontSize: 28,
              lineGap: 11,
            },
            tablet: {
              fontSize: 36,
              lineGap: 14,
            },
          },
          '2': {
            mobile: {
              fontSize: 24,
              lineGap: 11,
            },
            tablet: {
              fontSize: 30,
              lineGap: 13,
            },
          },
          '3': {
            mobile: {
              fontSize: 22,
              lineGap: 10,
            },
            tablet: {
              fontSize: 24,
              lineGap: 11,
            },
          },
          '4': {
            mobile: {
              fontSize: 20,
              lineGap: 9,
            },
            tablet: {
              fontSize: 20,
              lineGap: 9,
            },
          },
        },
      },
      text: {
        large: {
          mobile: {
            fontSize: 18,
            lineGap: 13,
          },
          tablet: {
            fontSize: 18,
            lineGap: 13,
          },
        },
        standard: {
          mobile: {
            fontSize: 16,
            lineGap: 12,
          },
          tablet: {
            fontSize: 16,
            lineGap: 12,
          },
        },
        small: {
          mobile: {
            fontSize: 14,
            lineGap: 10,
          },
          tablet: {
            fontSize: 14,
            lineGap: 10,
          },
        },
        xsmall: {
          mobile: {
            fontSize: 12,
            lineGap: 9,
          },
          tablet: {
            fontSize: 12,
            lineGap: 9,
          },
        },
      },
    },
    space: {
      gutter: 8,
      xxsmall: 2,
      xsmall: 3,
      small: 4,
      medium: 6,
      large: 8,
      xlarge: 12,
      xxlarge: 16,
      xxxlarge: 24,
    },
    contentWidth: {
      xsmall: 400,
      small: 660,
      medium: 940,
      large: 1280,
    },
    grid: 4,
    focusRingSize: 6,
    touchableSize: 12,
    border: {
      width: {
        standard: 2,
        large: 4,
      },
      radius: {
        small: '4px',
        standard: '8px',
        large: '16px',
        xlarge: '24px',
      },
      color: {
        brandAccent,
        brandAccentLight,
        caution: palette.yellow['500'],
        cautionLight: palette.yellow['300'],
        critical,
        criticalLight: palette.red['300'],
        field: palette.grey['400'],
        focus: rgba(palette.seekBlueLight['300'], 0.7),
        formAccent: palette.seekBlueLight['700'],
        formAccentLight: palette.seekBlueLight['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        neutral: palette.grey['700'],
        neutralInverted: white,
        neutralLight: palette.grey['100'],
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
      },
    },
    transforms: {
      touchable: 'scale(0.95)',
    },
    transitions: {
      fast: 'transform .125s ease, opacity .125s ease',
      touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
    },
    shadows: {
      small: [
        `0 2px 4px 0px ${rgba(palette.grey['800'], 0.1)}`,
        `0 2px 2px -2px ${rgba(palette.grey['800'], 0.1)}`,
        `0 4px 4px -4px ${rgba(palette.grey['800'], 0.2)}`,
      ].join(', '),
      medium: [
        `0 2px 4px 0px ${rgba(palette.grey['800'], 0.1)}`,
        `0 8px 8px -4px ${rgba(palette.grey['800'], 0.1)}`,
        `0 12px 12px -8px ${rgba(palette.grey['800'], 0.2)}`,
      ].join(', '),
      large: [
        `0 2px 4px 0px ${rgba(palette.grey['800'], 0.1)}`,
        `0 12px 12px -4px ${rgba(palette.grey['800'], 0.1)}`,
        `0 20px 20px -12px ${rgba(palette.grey['800'], 0.2)}`,
      ].join(', '),
    },
    color: {
      foreground: {
        brandAccent,
        brandAccentLight,
        caution: palette.yellow['900'],
        cautionLight: palette.yellow['300'],
        critical,
        criticalLight: palette.red['300'],
        formAccent: palette.seekBlueLight['700'],
        formAccentLight: palette.seekBlueLight['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        link: palette.grey['700'],
        linkHover: palette.grey['700'],
        linkLight: white,
        linkLightVisited: palette.purple['200'],
        linkVisited: palette.purple['800'],
        neutral: palette.grey['700'],
        neutralInverted: white,
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
        rating: palette.orange['600'],
        secondary: palette.grey['500'],
        secondaryInverted: rgba(white, 0.65),
      },
      background: {
        body: white,
        bodyDark: palette.grey['800'],
        brand,
        brandAccent,
        brandAccentActive,
        brandAccentHover,
        brandAccentSoft,
        brandAccentSoftActive,
        brandAccentSoftHover,
        caution: palette.yellow['500'],
        cautionLight: palette.yellow['100'],
        critical,
        criticalActive: darken(0.05, critical),
        criticalHover: saturate(0.1, lighten(0.05, critical)),
        criticalLight: palette.red['100'],
        criticalSoft: palette.red['50'],
        criticalSoftActive: darken(0.05, palette.red['50']),
        criticalSoftHover: darken(0.025, palette.red['50']),
        formAccent: palette.seekBlueLight['700'],
        formAccentActive: darken(0.05, palette.seekBlueLight['700']),
        formAccentHover: lighten(0.075, palette.seekBlueLight['700']),
        formAccentSoft: palette.seekBlueLight['50'],
        formAccentSoftActive: darken(0.05, palette.seekBlueLight['50']),
        formAccentSoftHover: darken(0.025, palette.seekBlueLight['50']),
        info: palette.blue['700'],
        infoLight: palette.blue['100'],
        neutral: palette.grey['700'],
        neutralActive: darken(0.05, palette.grey['700']),
        neutralHover: lighten(0.05, palette.grey['700']),
        neutralLight: palette.grey['75'],
        neutralSoft: palette.grey['75'],
        neutralSoftActive: darken(0.05, palette.grey['75']),
        neutralSoftHover: darken(0.025, palette.grey['75']),
        positive: palette.mint['700'],
        positiveLight: palette.mint['100'],
        promote: palette.purple['700'],
        promoteLight: palette.purple['100'],
        surface: white,
        surfaceDark: palette.grey['800'],
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
