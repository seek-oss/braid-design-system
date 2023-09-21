import { lighten, darken, saturate, rgba, desaturate } from 'polished';
import inter from '@capsizecss/metrics/inter';
import { palette } from './palette';
import { type BraidTokens, extractFontMetricsForTheme } from '../tokenType';

const darkLayer1 = darken(0.05, palette.grey['800']);
const darkLayer2 = palette.grey['800'];
const darkLayer3 = desaturate(0.075, lighten(0.05, palette.grey['800']));

export default {
  name: 'gradConnection',
  displayName: 'Grad Connection',
  legacy: false,
  typography: {
    fontFamily: 'Inter, sans-serif',
    webFont:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
    fontMetrics: extractFontMetricsForTheme(inter),
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 600,
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
            lineGap: 11,
          },
          tablet: {
            fontSize: 36,
            lineGap: 14,
          },
        },
        '2': {
          mobile: {
            fontSize: 24,
            lineGap: 11,
          },
          tablet: {
            fontSize: 30,
            lineGap: 13,
          },
        },
        '3': {
          mobile: {
            fontSize: 22,
            lineGap: 10,
          },
          tablet: {
            fontSize: 24,
            lineGap: 11,
          },
        },
        '4': {
          mobile: {
            fontSize: 20,
            lineGap: 9,
          },
          tablet: {
            fontSize: 20,
            lineGap: 9,
          },
        },
      },
    },
    text: {
      large: {
        mobile: {
          fontSize: 18,
          lineGap: 13,
        },
        tablet: {
          fontSize: 18,
          lineGap: 13,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          lineGap: 12,
        },
        tablet: {
          fontSize: 16,
          lineGap: 12,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          lineGap: 10,
        },
        tablet: {
          fontSize: 14,
          lineGap: 10,
        },
      },
      xsmall: {
        mobile: {
          fontSize: 12,
          lineGap: 9,
        },
        tablet: {
          fontSize: 12,
          lineGap: 9,
        },
      },
    },
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 1024,
    large: 1280,
  },
  grid: 4,
  space: {
    gutter: 6,
    xxsmall: 2,
    xsmall: 3,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 16,
    xxxlarge: 24,
  },
  focusRingSize: 6,
  touchableSize: 11,
  transforms: {
    touchable: 'scale(0.95)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    width: {
      standard: 1,
      large: 2,
    },
    radius: {
      small: '2px',
      standard: '4px',
      large: '8px',
      xlarge: '16px',
    },
    color: {
      brandAccent: palette.brandGreen['700'],
      brandAccentLight: palette.brandGreen['300'],
      caution: palette.yellow['500'],
      cautionLight: palette.yellow['300'],
      critical: palette.red['500'],
      criticalLight: palette.red['300'],
      field: palette.grey['300'],
      focus: rgba(palette.brandGreen['300'], 0.7),
      formAccent: palette.brandGreen['700'],
      formAccentLight: palette.brandGreen['300'],
      info: palette.blue['700'],
      infoLight: palette.blue['300'],
      neutral: palette.grey['800'],
      neutralInverted: '#fff',
      neutralLight: palette.grey['200'],
      positive: palette.brandGreen['700'],
      positiveLight: palette.brandGreen['300'],
      promote: palette.purple['700'],
      promoteLight: palette.purple['300'],
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
      brandAccent: palette.brandGreen['700'],
      brandAccentLight: palette.brandGreen['300'],
      caution: darken(0.1, palette.yellow['900']),
      cautionLight: palette.yellow['300'],
      critical: palette.red['500'],
      criticalLight: palette.red['300'],
      formAccent: palette.brandGreen['700'],
      formAccentLight: palette.brandGreen['300'],
      info: palette.blue['500'],
      infoLight: palette.blue['50'],
      link: palette.brandGreen['700'],
      linkHover: palette.brandGreen['700'],
      linkLight: palette.brandGreen['300'],
      linkLightVisited: palette.purple['300'],
      linkVisited: palette.purple['700'],
      neutral: palette.grey['800'],
      neutralInverted: '#fff',
      positive: palette.brandGreen['900'],
      positiveLight: palette.brandGreen['300'],
      promote: palette.purple['700'],
      promoteLight: palette.purple['300'],
      rating: '#E05821',
      secondary: palette.grey['500'],
      secondaryInverted: rgba('#fff', 0.65),
    },
    background: {
      body: palette.grey['75'],
      bodyDark: darkLayer1,
      brand: palette.brandGreen['500'],
      brandAccent: palette.brandGreen['500'],
      brandAccentActive: darken(0.05, palette.brandGreen['500']),
      brandAccentHover: lighten(0.05, palette.brandGreen['500']),
      brandAccentSoft: palette.brandGreen['10'],
      brandAccentSoftActive: darken(0.05, palette.brandGreen['10']),
      brandAccentSoftHover: darken(0.025, palette.brandGreen['10']),
      caution: palette.yellow['500'],
      cautionLight: palette.yellow['10'],
      critical: palette.red['500'],
      criticalActive: darken(0.05, palette.red['500']),
      criticalHover: saturate(0.1, lighten(0.05, palette.red['500'])),
      criticalLight: palette.red['10'],
      criticalSoft: palette.red['10'],
      criticalSoftActive: darken(0.05, palette.red['10']),
      criticalSoftHover: darken(0.025, palette.red['10']),
      formAccent: palette.brandGreen['500'],
      formAccentActive: darken(0.05, palette.brandGreen['500']),
      formAccentHover: lighten(0.075, palette.brandGreen['500']),
      formAccentSoft: palette.brandGreen['10'],
      formAccentSoftActive: darken(0.05, palette.brandGreen['10']),
      formAccentSoftHover: darken(0.025, palette.brandGreen['10']),
      info: palette.blue['700'],
      infoLight: palette.blue['10'],
      neutral: darkLayer3,
      neutralActive: darken(0.05, darkLayer3),
      neutralHover: lighten(0.05, darkLayer3),
      neutralLight: palette.grey['100'],
      neutralSoft: palette.grey['100'],
      neutralSoftActive: darken(0.05, palette.grey['100']),
      neutralSoftHover: darken(0.025, palette.grey['100']),
      positive: palette.brandGreen['700'],
      positiveLight: palette.brandGreen['10'],
      promote: palette.purple['700'],
      promoteLight: palette.purple['10'],
      surface: '#fff',
      surfaceDark: darkLayer2,
    },
  },
} satisfies BraidTokens;
