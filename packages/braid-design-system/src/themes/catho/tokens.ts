import { darken, lighten, mix, tint } from 'polished';
import { getAccessibleVariant, getLightVariant, isLight } from '../../utils';
import { BraidTokens } from '../tokenType';

const linkVisited = 'DarkViolet';

const brand = '#1250C4';
const brandAccent = '#de0059';
const formAccent = brand;
const focus = brand;
const critical = '#e91b0c';
const criticalLight = '#f9e6e4';
const positive = '#3b610f';
const caution = '#ffc600';
const info = brand;
const promote = '#5736ab';
const neutral = '#424242';
const secondary = '#737374';
const white = '#fff';
const link = brand;

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
      caution,
      cautionLight: mix(0.6, caution, getLightVariant(caution)),
      critical,
      criticalLight: mix(0.3, critical, criticalLight),
      field: '#999999',
      focus,
      formAccent,
      formHover: formAccent,
      info,
      infoLight: mix(0.3, info, getLightVariant(info)),
      positive,
      positiveLight: mix(0.3, positive, getLightVariant(positive)),
      promote,
      promoteLight: mix(0.3, promote, getLightVariant(promote)),
      standard: '#e0e0e0',
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
      linkHover: link,
      linkVisited,
      neutral,
      neutralInverted: white,
      positive: getAccessibleVariant(positive),
      promote: getAccessibleVariant(promote),
      rating: '#f36e23',
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    },
    background: {
      body: '#f2f2f2',
      brand: '#0037e9',
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
      formAccentDisabled: '#ccc',
      formAccentHover: getHoverColor(formAccent),
      formAccentSoft: tint(0.925, formAccent),
      formAccentSoftActive: tint(0.85, formAccent),
      formAccentSoftHover: tint(0.9, formAccent),
      info,
      infoLight: getLightVariant(info),
      input: white,
      inputDisabled: '#f2f2f2',
      neutral,
      neutralLight: getLightVariant(neutral),
      positive,
      positiveLight: getLightVariant(positive),
      promote,
      promoteLight: getLightVariant(promote),
      selection: '#f2f2f2',
    },
  },
};

export default tokens;
