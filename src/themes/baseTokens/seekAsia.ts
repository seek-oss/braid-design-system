import { BraidTokens } from '../tokenType';
import { DeepPartial } from 'utility-types';
import merge from 'lodash/merge';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';
import { darken, lighten, mix, tint } from 'polished';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

interface MakeTokensOptions {
  name: string;
  displayName: string;
  bodyBackground: string;
  brand: string;
  brandAccent: string;
  formAccent: string;
  tokenOverrides?: DeepPartial<BraidTokens>;
}
export const makeTokens = ({
  name,
  displayName,
  bodyBackground,
  brand,
  brandAccent,
  formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): BraidTokens => {
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
  const criticalLight = '#fae3e3';
  const caution = '#ffc600';
  const focus = blue3;
  const link = blue2;
  const linkHover = blue2;
  const linkVisited = '#3f11a3';
  const selection = blue5;
  const secondary = grey2;
  const neutral = grey2;

  const tokens: BraidTokens = {
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
              fontSize: 28,
              rows: 9,
            },
            tablet: {
              fontSize: 34,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              fontSize: 24,
              rows: 8,
            },
            tablet: {
              fontSize: 28,
              rows: 9,
            },
          },
          '3': {
            mobile: {
              fontSize: 20,
              rows: 7,
            },
            tablet: {
              fontSize: 24,
              rows: 8,
            },
          },
          '4': {
            mobile: {
              fontSize: 18,
              rows: 6,
            },
            tablet: {
              fontSize: 18,
              rows: 6,
            },
          },
        },
      },
      text: {
        xsmall: {
          mobile: {
            fontSize: 12,
            rows: 4,
          },
          tablet: {
            fontSize: 12,
            rows: 4,
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
            rows: 6,
          },
          tablet: {
            fontSize: 18,
            rows: 6,
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
        large: '6px',
        xlarge: '10px',
      },
      width: {
        standard: 1,
        large: 2,
      },
      color: {
        brandAccent,
        caution,
        cautionLight: mix(0.6, caution, getLightVariant(caution)),
        critical,
        criticalLight: mix(0.3, critical, criticalLight),
        field: grey4,
        focus,
        formAccent,
        formHover: formAccent,
        info,
        infoLight: mix(0.3, info, getLightVariant(info)),
        positive,
        positiveLight: mix(0.3, positive, getLightVariant(positive)),
        promote,
        promoteLight: mix(0.3, promote, getLightVariant(promote)),
        standard: grey4,
        standardInverted: white,
      },
    },
    focusRingSize: 2,
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
        brandAccent,
        caution: getAccessibleVariant(caution, caution),
        critical: getAccessibleVariant(critical),
        formAccent,
        info: getAccessibleVariant(info),
        link,
        linkHover,
        linkVisited,
        neutral: grey1,
        neutralInverted: white,
        positive: getAccessibleVariant(positive),
        promote: getAccessibleVariant(promote),
        rating: '#ff9000',
        secondary,
        secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      },
      background: {
        body: bodyBackground,
        brand,
        brandAccent,
        brandAccentActive: getActiveColor(brandAccent),
        brandAccentHover: getHoverColor(brandAccent),
        brandAccentSoft: tint(0.925, brandAccent),
        brandAccentSoftActive: tint(0.85, brandAccent),
        brandAccentSoftHover: tint(0.9, brandAccent),
        card: white,
        caution,
        cautionLight: getLightVariant(caution),
        critical,
        criticalActive: getActiveColor(critical),
        criticalHover: getHoverColor(critical),
        criticalLight,
        criticalSoft: tint(0.925, critical),
        criticalSoftActive: tint(0.85, critical),
        criticalSoftHover: tint(0.9, critical),
        formAccent,
        formAccentActive: getActiveColor(formAccent),
        formAccentDisabled: grey4,
        formAccentHover: getHoverColor(formAccent),
        formAccentSoft: tint(0.925, formAccent),
        formAccentSoftActive: tint(0.85, formAccent),
        formAccentSoftHover: tint(0.9, formAccent),
        info,
        infoLight: getLightVariant(info),
        input: white,
        inputDisabled: grey5,
        neutral,
        neutralLight: getLightVariant(neutral),
        positive,
        positiveLight: getLightVariant(positive),
        promote,
        promoteLight: getLightVariant(promote),
        selection,
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
