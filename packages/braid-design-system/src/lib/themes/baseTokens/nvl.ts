import { darken, lighten, rgba, saturate } from 'polished';

import { palette } from '../../color/palette';
import type { BraidTokens } from '../tokenType';

interface MakeTokensOptions {
  name: string;
  displayName: string;
  brandAccent: string;
  brandAccentLight: string;
  brandAccentSoft: string;
}

const formAccent = palette.seekBlueLight['700'];
const promote = palette.purple['700'];
const critical = palette.red['700'];
const focus = rgba(palette.seekBlueLight['300'], 0.7);
const white = '#fff';

export const makeTokens = ({
  name,
  displayName,
  brandAccent,
  brandAccentLight,
  brandAccentSoft,
}: MakeTokensOptions): BraidTokens => {
  const brandAccentActive = darken(0.05, brandAccent);
  const brandAccentHover = lighten(0.05, brandAccent);
  const brandAccentSoftActive = darken(0.05, brandAccentSoft);
  const brandAccentSoftHover = darken(0.025, brandAccentSoft);

  const tokens: BraidTokens = {
    name,
    displayName,
    typography: {
      fontFamily: 'SeekSans, "SeekSans Fallback", Arial, Tahoma, sans-serif',
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
        medium: 600,
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
    contentWidth: {
      xsmall: 400,
      small: 660,
      medium: 940,
      large: 1280,
    },
    grid: 4,
    touchableSize: 12,
    space: {
      gutter: 6,
      xxsmall: 2,
      xsmall: 3,
      small: 4,
      medium: 6,
      large: 8,
      xlarge: 12,
      xxlarge: 16,
      xxxlarge: 24,
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
        small: '4px',
        standard: '8px',
        large: '16px',
        xlarge: '24px',
      },
      width: {
        standard: 2,
        large: 4,
      },
      color: {
        brandAccent,
        brandAccentLight,
        caution: palette.yellow['500'],
        cautionLight: palette.yellow['300'],
        critical,
        criticalLight: palette.red['300'],
        field: palette.grey['400'],
        focus,
        formAccent,
        formAccentLight: palette.seekBlueLight['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        neutral: palette.grey['700'],
        neutralLight: palette.grey['100'],
        neutralInverted: white,
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote,
        promoteLight: palette.purple['300'],
      },
    },
    focusRingSize: 6,
    shadows: {
      small: [
        `0 0 4px 0 ${rgba(palette.grey['800'], 0.08)}`,
        `0 4px 8px -2px ${rgba(palette.grey['800'], 0.08)}`,
      ].join(', '),
      medium: [
        `0 0 8px 0 ${rgba(palette.grey['800'], 0.08)}`,
        `0 8px 16px -4px ${rgba(palette.grey['800'], 0.08)}`,
      ].join(', '),
      large: [
        `0 0 12px 0 ${rgba(palette.grey['800'], 0.08)}`,
        `0 12px 24px -6px ${rgba(palette.grey['800'], 0.08)}`,
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
        formAccent,
        formAccentLight: palette.seekBlueLight['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        link: palette.grey['700'],
        linkLight: white,
        linkHover: palette.grey['700'],
        linkVisited: palette.purple['800'],
        linkLightVisited: palette.purple['200'],
        neutral: palette.grey['700'],
        neutralInverted: white,
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote,
        promoteLight: palette.purple['300'],
        secondary: palette.grey['500'],
        secondaryInverted: rgba('#fff', 0.65),
      },
      background: {
        body: '#fff',
        bodyDark: palette.grey['800'],
        brand: palette.seekBlue['700'],
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
        formAccent,
        formAccentActive: darken(0.05, formAccent),
        formAccentHover: lighten(0.075, formAccent),
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
        promote,
        promoteLight: palette.purple['100'],
        surface: white,
        surfaceDark: palette.grey['800'],
      },
    },
  };

  return tokens;
};
