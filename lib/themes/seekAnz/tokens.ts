import { darken, rgba, lighten, tint, desaturate } from 'polished';
import {
  findClosestAccessibleLighterColor,
  getAccessibleVariant,
  getLightVariant,
  isLight,
} from '../../utils';
import { BraidTokens } from '../tokenType';

const brand = '#0d3880';
const brandAccent = '#e60278';
const formAccent = '#2765cf';
const white = '#fff';
const focus = rgba('#1e90ff', 0.7);
const positive = '#138a08';
const critical = '#d0011b';
const criticalLightBackground = '#fae4e7';
const info = '#1e468c';
const promote = '#9556b7';
const caution = '#ffc600';
const neutral = '#404040';
const neutralSoft = lighten(0.02, getLightVariant(neutral));
const black = '#1c1c1c';
const link = '#2765cf';
const linkVisited = '#733d90';
const secondary = '#1c1c1ca1';
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
  name: 'seekAnz',
  displayName: 'SEEK ANZ',
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
  touchableSize: 12,
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
      standard: '2px',
      large: '4px',
      xlarge: '6px',
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
      field: '#898989',
      focus,
      formAccent,
      formAccentLight,
      info,
      infoLight,
      neutral: black,
      neutralLight: '#d6d6d6',
      neutralInverted: white,
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
      rating: '#f57c00',
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    },
    background: {
      body: '#eee',
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
      surfaceDark: '#333',
    },
  },
};

export default tokens;
