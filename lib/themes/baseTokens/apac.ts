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
  brandAccentActive: string;
  brandAccentHover: string;
  brandAccentLight: string;
  brandAccentLightActive: string;
  brandAccentLightHover: string;
  tokenOverrides?: DeepPartial<BraidTokens>;
}
export const makeTokens = ({
  name,
  displayName,
  brand,
  brandAccent,
  brandAccentActive,
  brandAccentHover,
  brandAccentLight,
  brandAccentLightActive,
  brandAccentLightHover,
  tokenOverrides = {},
}: MakeTokensOptions): BraidTokens => {
  const formAccent = palette.indigo['500'];
  const critical = palette.red['600'];
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
      },
      width: {
        standard: 1,
        large: 2,
      },
      color: {
        brandAccent,
        caution: palette.yellow['400'],
        critical,
        field: palette.grey['400'],
        focus,
        formAccent,
        formHover: palette.indigo['500'],
        info: palette.blue['600'],
        positive: palette.mint['600'],
        promote: palette.plum['600'],
        standard: palette.grey['300'],
        standardInverted: white,
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
        caution: palette.yellow['800'],
        critical,
        formAccent,
        info: palette.blue['700'],
        link: formAccent,
        linkHover: formAccent,
        linkVisited: palette.plum['700'],
        neutral: palette.grey['800'],
        neutralInverted: white,
        positive: palette.mint['700'],
        promote: palette.plum['700'],
        rating: '#f57c00',
        secondary: palette.grey['500'],
        secondaryInverted: rgba('#fff', 0.65),
      },
      background: {
        body: palette.grey['50'],
        brand,
        brandAccent,
        brandAccentActive,
        brandAccentHover,
        brandAccentLight,
        brandAccentLightActive,
        brandAccentLightHover,
        card: white,
        caution: palette.yellow['400'],
        cautionLight: palette.yellow['50'],
        critical,
        criticalActive: darken(0.05, critical),
        criticalHover: saturate(0.15, lighten(0.05, critical)),
        criticalLight: palette.red['50'],
        criticalLightActive: darken(0.05, palette.red['50']),
        criticalLightHover: darken(0.025, palette.red['50']),
        formAccent,
        formAccentActive: darken(0.05, formAccent),
        formAccentDisabled: palette.grey['200'],
        formAccentHover: saturate(0.5, lighten(0.075, formAccent)),
        formAccentLight: palette.indigo['50'],
        formAccentLightActive: darken(0.05, palette.indigo['50']),
        formAccentLightHover: darken(0.025, palette.indigo['50']),
        info: palette.blue['600'],
        infoLight: palette.blue['50'],
        input: white,
        inputDisabled: palette.grey['50'],
        neutral: palette.grey['200'],
        neutralLight: palette.grey['50'],
        positive: palette.mint['600'],
        positiveLight: palette.mint['50'],
        promote: palette.plum['600'],
        promoteLight: palette.plum['50'],
        selection: palette.indigo['50'],
      },
    },
    alertBorderColor: {
      caution: palette.yellow['300'],
      critical: palette.red['300'],
      info: palette.blue['300'],
      positive: palette.mint['300'],
      promote: palette.plum['300'],
    },
  };

  return merge(tokens, tokenOverrides);
};
