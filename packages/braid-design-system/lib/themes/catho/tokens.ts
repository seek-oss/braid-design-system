import { darken, lighten, tint } from 'polished';
import {
  findClosestAccessibleLighterColor,
  getAccessibleVariant,
  getLightVariant,
  isLight,
} from '../../utils';
import { BraidTokens } from '../tokenType';

const linkVisited = 'DarkViolet';

const brand = '#1250C4';
const brandAccent = '#de0059';
const formAccent = brand;
const focus = brand;
const critical = '#e91b0c';
const criticalLightBackground = '#f9e6e4';
const positive = '#3b610f';
const caution = '#ffc600';
const info = brand;
const promote = '#5736ab';
const neutral = '#424242';
const neutralSoft = lighten(0.02, getLightVariant(neutral));
const secondary = '#737374';
const white = '#fff';
const link = brand;
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
  name: 'Catho',
  displayName: 'Catho',
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    webFont: 'Nunito Sans',
    fontMetrics: {
      capHeight: 705,
      ascent: 1011,
      descent: -353,
      lineGap: 0,
      unitsPerEm: 1000,
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 800,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 36,
            rows: 12,
          },
          tablet: {
            fontSize: 36,
            rows: 12,
          },
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 10,
          },
          tablet: {
            fontSize: 28,
            rows: 10,
          },
        },
        '3': {
          mobile: {
            fontSize: 24,
            rows: 9,
          },
          tablet: {
            fontSize: 24,
            rows: 9,
          },
        },
        '4': {
          mobile: {
            fontSize: 20,
            rows: 7,
          },
          tablet: {
            fontSize: 20,
            rows: 7,
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
          rows: 4,
        },
        tablet: {
          fontSize: 14,
          rows: 4,
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
    medium: 984,
    large: 1180,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 12,
    xxlarge: 20,
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
      field: '#999999',
      focus,
      formAccent,
      formAccentLight,
      info,
      infoLight,
      neutral,
      neutralInverted: white,
      neutralLight: '#e0e0e0',
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
      neutral,
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
      body: '#f2f2f2',
      brand: '#0037e9',
      bodyDark: 'black',
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
