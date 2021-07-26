import { BraidTokens } from '../tokenType';
import { DeepPartial } from 'utility-types';
import { darken, lighten, rgba } from 'polished';
import merge from 'lodash/merge';
import { isLight } from '../../utils';
import { palette } from '../../color/palette';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

interface MakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  brandAccent: string;
  formAccent: string;
  tokenOverrides?: DeepPartial<BraidTokens>;
}
export const makeTokens = ({
  name,
  displayName,
  // brand,
  brandAccent,
  // formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): BraidTokens => {
  // const critical = '#d0011b';
  // const positive = '#138a08';
  // const info = '#1e468c';
  // const promote = '#9556b7';
  // const caution = '#ffc600';
  const focus = rgba('#1e90ff', 0.7);
  const black = palette.grey['800'];
  const white = '#fff';
  const link = '#2765cf';
  const linkVisited = '#733d90';
  const secondary = palette.grey['500'];

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
        caution: palette.yellow['300'],
        critical: palette.red['200'],
        field: palette.grey['200'],
        focus,
        formAccent: palette.indigo['500'],
        formHover: palette.indigo['500'],
        info: palette.blue['200'],
        positive: palette.mint['200'],
        promote: palette.plum['200'],
        standard: palette.grey['200'],
        standardInverted: white,
      },
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
        caution: palette.yellow['800'],
        critical: palette.red['700'],
        formAccent: palette.indigo['500'],
        info: palette.blue['700'],
        link,
        linkHover: link,
        linkVisited,
        neutral: black,
        neutralInverted: white,
        positive: palette.mint['700'],
        promote: palette.plum['700'],
        rating: '#f57c00',
        secondary,
        secondaryInverted: rgba('#fff', 0.65),
      },
      background: {
        body: palette.grey['50'],
        brand: palette.seekBlue['500'],
        brandAccent,
        brandAccentActive: getActiveColor(brandAccent),
        brandAccentHover: getHoverColor(brandAccent),
        brandAccentLight: palette.seekPink['100'],
        brandAccentLightActive: darken(0.05, palette.seekPink['100']),
        brandAccentLightHover: darken(0.025, palette.seekPink['100']),
        card: white,
        caution: palette.yellow['400'],
        cautionLight: palette.yellow['100'],
        critical: palette.red['600'],
        criticalActive: darken(0.075, palette.red['600']),
        criticalHover: darken(0.05, palette.red['600']),
        criticalLight: palette.red['100'],
        criticalLightActive: darken(0.05, palette.red['100']),
        criticalLightHover: darken(0.025, palette.red['100']),
        formAccent: palette.indigo['500'],
        formAccentActive: palette.indigo['700'],
        formAccentDisabled: palette.grey['200'],
        formAccentHover: palette.indigo['600'],
        formAccentLight: palette.indigo['100'],
        formAccentLightActive: darken(0.05, palette.indigo['100']),
        formAccentLightHover: darken(0.025, palette.indigo['100']),
        formAccentLightInverted: rgba('#fff', 0.075),
        formAccentLightInvertedActive: rgba('#000', 0.05),
        formAccentLightInvertedHover: rgba('#fff', 0.15),
        info: palette.blue['600'],
        infoLight: palette.blue['100'],
        input: white,
        inputDisabled: palette.grey['200'],
        neutral: palette.grey['200'],
        neutralLight: palette.grey['100'],
        positive: palette.mint['600'],
        positiveLight: palette.mint['100'],
        promote: palette.plum['600'],
        promoteLight: palette.plum['100'],
        selection: palette.grey['100'],
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
