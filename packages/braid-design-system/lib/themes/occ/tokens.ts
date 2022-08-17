import { BraidTokens } from '../tokenType';
import { darken, desaturate, lighten, tint } from 'polished';
import {
  findClosestAccessibleLighterColor,
  getAccessibleVariant,
  getLightVariant,
  isLight,
} from '../../utils';

const brand = '#083cae';
const brandAccent = '#f13465';
const formAccent = brand;
const focus = lighten(0.5, brand);
const critical = '#db3737';
const criticalLightBackground = '#f6e4e4';
const positive = '#009537';
const caution = '#ffc549';
const info = '#0946CB';
const promote = '#5736ab';
const neutral = '#444444';
const neutralSoft = '#f5f5f5';
const black = '#222';
const secondary = '#777';
const white = '#fff';
const link = '#0946CB';
const linkVisited = '#5736ab';
const brandAccentLight = findClosestAccessibleLighterColor(
  brandAccent,
  neutral,
);
const formAccentLight = findClosestAccessibleLighterColor(formAccent, neutral);
const criticalLight = findClosestAccessibleLighterColor(critical, neutral);
const cautionLight = findClosestAccessibleLighterColor(caution, neutral);
const infoLight = findClosestAccessibleLighterColor(info, neutral);
const linkLight = findClosestAccessibleLighterColor(link, neutral);
const linkLightVisited = findClosestAccessibleLighterColor(
  linkVisited,
  neutral,
);
const positiveLight = findClosestAccessibleLighterColor(
  desaturate(0.5, positive),
  neutral,
);
const promoteLight = findClosestAccessibleLighterColor(promote, neutral);

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const tokens: BraidTokens = {
  name: 'OCC',
  displayName: 'OCC Mundial',
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    webFont: 'Open Sans',
    fontMetrics: {
      capHeight: 1462,
      ascent: 2189,
      descent: -600,
      lineGap: 0,
      unitsPerEm: 2048,
    },
    fontWeight: {
      regular: 400,
      medium: 600, // Not implemented rolling up to strong for consistency.
      strong: 600,
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
            rows: 8,
          },
          tablet: {
            fontSize: 57,
            rows: 18,
          },
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 8,
          },
          tablet: {
            fontSize: 36,
            rows: 12,
          },
        },
        '3': {
          mobile: {
            fontSize: 22,
            rows: 8,
          },
          tablet: {
            fontSize: 22,
            rows: 8,
          },
        },
        '4': {
          mobile: {
            fontSize: 16,
            rows: 6,
          },
          tablet: {
            fontSize: 16,
            rows: 6,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 10,
          rows: 4,
        },
        tablet: {
          fontSize: 10,
          rows: 4,
        },
      },
      small: {
        mobile: {
          fontSize: 12,
          rows: 4,
        },
        tablet: {
          fontSize: 12,
          rows: 4,
        },
      },
      standard: {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 6,
        },
      },
      large: {
        mobile: {
          fontSize: 16,
          rows: 6,
        },
        tablet: {
          fontSize: 16,
          rows: 6,
        },
      },
    },
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 984,
    large: 1164,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 16,
  },
  transforms: {
    touchable: 'scale(0.97)',
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
      caution,
      cautionLight,
      critical,
      criticalLight,
      field: '#dddddd',
      focus,
      formAccent,
      formAccentLight,
      info,
      infoLight,
      neutral: black,
      neutralInverted: white,
      neutralLight: '#dddddd',
      positive,
      positiveLight,
      promote,
      promoteLight,
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
      brandAccentLight,
      caution: getAccessibleVariant(caution, caution),
      cautionLight,
      critical: getAccessibleVariant(critical),
      criticalLight,
      formAccent,
      formAccentLight,
      info: getAccessibleVariant(info),
      infoLight,
      link,
      linkHover: link,
      linkLight,
      linkVisited,
      linkLightVisited,
      neutral: black,
      neutralInverted: white,
      positive: getAccessibleVariant(positive),
      positiveLight,
      promote: getAccessibleVariant(promote),
      promoteLight,
      rating: '#f36e23',
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    },
    background: {
      body: '#f5f5f8',
      bodyDark: 'black',
      brand,
      brandAccent,
      brandAccentActive: getActiveColor(brandAccent),
      brandAccentHover: getHoverColor(brandAccent),
      brandAccentSoft: tint(0.925, brandAccent),
      brandAccentSoftActive: tint(0.85, brandAccent),
      brandAccentSoftHover: tint(0.9, brandAccent),
      caution,
      cautionLight: getLightVariant(caution),
      critical,
      criticalActive: getActiveColor(critical),
      criticalHover: getHoverColor(critical),
      criticalLight: criticalLightBackground,
      criticalSoft: tint(0.925, critical),
      criticalSoftActive: tint(0.85, critical),
      criticalSoftHover: tint(0.9, critical),
      formAccent,
      formAccentActive: getActiveColor(formAccent),
      formAccentHover: getHoverColor(formAccent),
      formAccentSoft: tint(0.925, formAccent),
      formAccentSoftActive: tint(0.85, formAccent),
      formAccentSoftHover: tint(0.9, formAccent),
      info,
      infoLight: getLightVariant(info),
      neutral,
      neutralActive: darken(0.05, neutral),
      neutralHover: lighten(0.05, neutral),
      neutralLight: darken(0.04, getLightVariant(neutral)),
      neutralSoft,
      neutralSoftActive: darken(0.05, neutralSoft),
      neutralSoftHover: darken(0.025, neutralSoft),
      positive,
      positiveLight: getLightVariant(positive),
      promote,
      promoteLight: getLightVariant(promote),
      surface: white,
      surfaceDark: '#222',
    },
  },
};

export default tokens;
