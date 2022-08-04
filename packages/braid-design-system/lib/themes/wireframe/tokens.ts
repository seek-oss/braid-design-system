import { darken, lighten, tint } from 'polished';
import {
  findClosestAccessibleLighterColor,
  getAccessibleVariant,
  getLightVariant,
  isLight,
} from '../../utils';
import { BraidTokens } from '../tokenType';

const formAccent = '#767676';
const critical = '#ef3e4a';
const criticalLightBackground = '#fbe9eb';
const positive = '#00af50';
const info = '#2c88f7';
const promote = '#855be5';
const caution = '#ffc600';
const brandAccent = '#111';
const focus = 'DeepSkyBlue';
const black = '#303030';
const white = '#fff';
const link = '#4c77bb';
const linkVisited = 'DarkViolet';
const secondary = '#777';
const neutral = '#333';
const neutralSoft = lighten(0.02, getLightVariant(neutral));
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
const positiveLight = findClosestAccessibleLighterColor(positive, neutral);
const promoteLight = findClosestAccessibleLighterColor(promote, neutral);

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const tokens: BraidTokens = {
  name: 'wireframe',
  displayName: 'Wireframe',
  typography: {
    fontFamily: 'Courier, monospace',
    webFont: null,
    fontMetrics: {
      capHeight: 1186, // 1544 from fontkit, but should be 1186 according to fontforge
      ascent: 1638, // 1544 from fontkit, but should be 1638 according to general metrics table
      descent: -410, // -504 from fontkit, but should be -410 according to general metrics table
      lineGap: 184, // 0 from fontkit, but should be 184 according to os/2 metrics table
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
        regular: 'strong',
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
          rows: 7,
        },
        tablet: {
          fontSize: 16,
          rows: 7,
        },
      },
      large: {
        mobile: {
          fontSize: 18,
          rows: 8,
        },
        tablet: {
          fontSize: 18,
          rows: 8,
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
    touchable: 'scale(0.97)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '6px',
      large: '8px',
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
      field: '#333',
      focus,
      formAccent,
      formAccentLight,
      info,
      infoLight,
      neutral: black,
      neutralInverted: white,
      neutralLight: '#777',
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
      linkLightVisited,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      positive: getAccessibleVariant(positive),
      positiveLight,
      promote: getAccessibleVariant(promote),
      promoteLight,
      rating: black,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    },
    background: {
      body: 'whitesmoke',
      bodyDark: 'black',
      brand: black,
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
