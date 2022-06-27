import { DeepPartial } from 'utility-types';
import { darken, lighten, rgba, saturate } from 'polished';
import merge from 'lodash/merge';
import { palette } from '../../color/palette';
import { BraidTokens } from '../tokenType';

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
  const formAccent = palette.indigo['500'];
  const critical = palette.red['700'];
  const focus = rgba(palette.indigo['300'], 0.7);
  const white = '#fff';

  const tokens: BraidTokens = {
    name,
    displayName,
    typography: {
      fontFamily:
        'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      fontMetrics: {
        capHeight: 1456,
        ascent: 1900,
        descent: -500,
        lineGap: 0,
        unitsPerEm: 2048,
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
              rows: 9,
            },
            tablet: {
              fontSize: 42,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              fontSize: 21,
              rows: 8,
            },
            tablet: {
              fontSize: 28,
              rows: 9,
            },
          },
          '3': {
            mobile: {
              fontSize: 21,
              rows: 7,
            },
            tablet: {
              fontSize: 21,
              rows: 7,
            },
          },
          '4': {
            mobile: {
              fontSize: 18,
              rows: 7,
            },
            tablet: {
              fontSize: 18,
              rows: 7,
            },
          },
        },
      },
      text: {
        xsmall: {
          mobile: {
            fontSize: 12,
            rows: 5,
          },
          tablet: {
            fontSize: 12,
            rows: 5,
          },
        },
        small: {
          mobile: {
            fontSize: 14,
            rows: 5,
          },
          tablet: {
            fontSize: 14,
            rows: 5,
          },
        },
        standard: {
          mobile: {
            fontSize: 16,
            rows: 6,
          },
          tablet: {
            fontSize: 16,
            rows: 6,
          },
        },
        large: {
          mobile: {
            fontSize: 18,
            rows: 7,
          },
          tablet: {
            fontSize: 18,
            rows: 7,
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
    touchableSize: 11,
    space: {
      gutter: 6,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 5,
      large: 8,
      xlarge: 12,
      xxlarge: 24,
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
        standard: '4px',
        large: '6px',
        xlarge: '10px',
      },
      width: {
        standard: 1,
        large: 2,
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
        formAccentLight: palette.indigo['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        neutral: palette.grey['700'],
        neutralLight: palette.grey['200'],
        neutralInverted: white,
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote: palette.violet['700'],
        promoteLight: palette.violet['300'],
      },
    },
    focusRingSize: 3,
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
        formAccent,
        formAccentLight: palette.indigo['300'],
        info: palette.blue['700'],
        infoLight: palette.blue['300'],
        link: formAccent,
        linkLight: palette.indigo['300'],
        linkHover: formAccent,
        linkVisited: palette.violet['700'],
        linkLightVisited: palette.violet['300'],
        neutral: palette.grey['700'],
        neutralInverted: white,
        positive: palette.mint['700'],
        positiveLight: palette.mint['300'],
        promote: palette.violet['700'],
        promoteLight: palette.violet['300'],
        rating: '#f57c00',
        secondary: palette.grey['500'],
        secondaryInverted: rgba('#fff', 0.65),
      },
      background: {
        body: palette.grey['50'],
        bodyDark: palette.grey['900'],
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
        formAccent,
        formAccentActive: darken(0.05, formAccent),
        formAccentHover: saturate(0.5, lighten(0.075, formAccent)),
        formAccentSoft: palette.indigo['50'],
        formAccentSoftActive: darken(0.05, palette.indigo['50']),
        formAccentSoftHover: darken(0.025, palette.indigo['50']),
        info: palette.blue['700'],
        infoLight: palette.blue['100'],
        neutral: palette.grey['700'],
        neutralActive: darken(0.05, palette.grey['700']),
        neutralHover: lighten(0.05, palette.grey['700']),
        neutralLight: palette.grey['100'],
        neutralSoft: palette.grey['50'],
        neutralSoftActive: darken(0.05, palette.grey['50']),
        neutralSoftHover: darken(0.025, palette.grey['50']),
        positive: palette.mint['700'],
        positiveLight: palette.mint['100'],
        promote: palette.violet['700'],
        promoteLight: palette.violet['100'],
        surface: white,
        surfaceDark: palette.grey['800'],
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
