import { darken, lighten, mix, tint } from 'polished';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';
import { BraidTokens } from '../tokenType';

const formAccent = '#404040';
const critical = '#ef3e4a';
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
const neutral = '#edeef1';

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
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      brandAccent,
      caution,
      critical,
      field: '#333',
      focus,
      formAccent,
      formHover: formAccent,
      info,
      positive,
      promote,
      standard: '#777',
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
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent,
      brandAccent,
      critical: getAccessibleVariant(critical, 'text'),
      caution: getAccessibleVariant(caution, 'text'),
      positive: getAccessibleVariant(positive, 'text'),
      info: getAccessibleVariant(info, 'text'),
      promote: getAccessibleVariant(promote, 'text'),
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: black,
    },
    background: {
      body: 'whitesmoke',
      brand: black,
      brandAccent,
      brandAccentActive: getActiveColor(brandAccent),
      brandAccentHover: getHoverColor(brandAccent),
      brandAccentLight: tint(0.925, brandAccent),
      brandAccentLightActive: tint(0.85, brandAccent),
      brandAccentLightHover: tint(0.9, brandAccent),
      card: white,
      caution,
      cautionLight: getLightVariant(caution),
      critical,
      criticalActive: getActiveColor(critical),
      criticalHover: getHoverColor(critical),
      criticalLight: tint(0.925, critical),
      criticalLightActive: tint(0.85, critical),
      criticalLightHover: tint(0.9, critical),
      formAccent,
      formAccentActive: getActiveColor(formAccent),
      formAccentDisabled: '#ccc',
      formAccentHover: getHoverColor(formAccent),
      formAccentLight: tint(0.925, formAccent),
      formAccentLightActive: tint(0.85, formAccent),
      formAccentLightHover: tint(0.9, formAccent),
      info,
      infoLight: getLightVariant(info),
      input: white,
      inputDisabled: '#eee',
      neutral,
      neutralLight: getLightVariant(neutral),
      positive,
      positiveLight: getLightVariant(positive),
      promote,
      promoteLight: getLightVariant(promote),
      selection: '#f1f7ff',
    },
  },
  alertBorderColor: {
    caution: mix(0.6, caution, getLightVariant(caution)),
    critical: mix(0.3, critical, getLightVariant(critical)),
    info: mix(0.3, info, getLightVariant(info)),
    positive: mix(0.3, positive, getLightVariant(positive)),
    promote: mix(0.3, promote, getLightVariant(promote)),
  },
};

export default tokens;
