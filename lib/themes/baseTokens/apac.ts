import { BraidTokens } from '../tokenType';
import { DeepPartial } from 'utility-types';
import { darken, lighten, rgba } from 'polished';
import merge from 'lodash/merge';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';

const grey = {
  50: '#f5f6f8',
  100: '#e8eaee',
  200: '#d8dce2',
  300: '#b8beca',
  400: '#8991a5',
  500: '#596581',
  600: '#414a5f',
  700: '#313848',
  800: '#1e222b',
  900: '#0e1014',
} as const;

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
  brand,
  brandAccent,
  formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): BraidTokens => {
  const critical = '#d0011b';
  const positive = '#138a08';
  const info = '#1e468c';
  const promote = '#9556b7';
  const caution = '#ffc600';
  const focus = rgba('#1e90ff', 0.7);
  const black = grey['800'];
  const white = '#fff';
  const link = '#2765cf';
  const linkVisited = '#733d90';
  const secondary = grey['500'];

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
        standard: grey['200'],
        standardInverted: white,
        field: grey['400'],
        focus,
        formHover: formAccent,
        critical,
        info,
        promote,
        positive,
        caution,
        formAccent,
        brandAccent,
      },
    },
    shadows: {
      small: [
        `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
        `0 2px 2px -2px ${rgba(grey['800'], 0.1)}`,
        `0 4px 4px -4px ${rgba(grey['800'], 0.2)}`,
      ].join(', '),
      medium: [
        `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
        `0 8px 8px -4px ${rgba(grey['800'], 0.1)}`,
        `0 12px 12px -8px ${rgba(grey['800'], 0.2)}`,
      ].join(', '),
      large: [
        `0 2px 4px 0px ${rgba(grey['800'], 0.1)}`,
        `0 12px 12px -4px ${rgba(grey['800'], 0.1)}`,
        `0 20px 20px -12px ${rgba(grey['800'], 0.2)}`,
      ].join(', '),
    },
    color: {
      foreground: {
        brandAccent,
        caution: getAccessibleVariant(caution, 'text'),
        critical: getAccessibleVariant(critical, 'text'),
        formAccent,
        info: getAccessibleVariant(info, 'text'),
        link,
        linkHover: link,
        linkVisited,
        neutral: black,
        neutralInverted: white,
        positive: getAccessibleVariant(positive, 'text'),
        promote: getAccessibleVariant(promote, 'text'),
        rating: '#f57c00',
        secondary,
        secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      },
      background: {
        body: grey['50'],
        brand,
        brandAccent,
        brandAccentActive: getActiveColor(brandAccent),
        brandAccentHover: getHoverColor(brandAccent),
        card: white,
        caution,
        cautionLight: getLightVariant(caution),
        critical,
        criticalActive: getActiveColor(critical),
        criticalHover: getHoverColor(critical),
        criticalLight: getLightVariant(critical),
        formAccent,
        formAccentActive: getActiveColor(formAccent),
        formAccentDisabled: grey['100'],
        formAccentHover: getHoverColor(formAccent),
        info,
        infoLight: getLightVariant(info),
        input: white,
        inputDisabled: grey['50'],
        neutral: grey['500'],
        neutralLight: getLightVariant(grey['500']),
        positive,
        positiveLight: getLightVariant(positive),
        promote,
        promoteLight: getLightVariant(promote),
        selection: grey['100'],
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
