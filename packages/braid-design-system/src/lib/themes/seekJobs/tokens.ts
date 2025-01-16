import { lighten, darken, rgba } from 'polished';
import { palette } from '../../color/palette';
import { makeTokens } from '../baseTokens/apac';

const brandAccent = palette.seekPink['500'];
const brandAccentSoft = palette.seekPink['50'];

export default makeTokens({
  name: 'seekJobs',
  displayName: 'SEEK Jobs',
  brand: palette.seekBlue['700'],
  brandAccent,
  brandAccentLight: palette.seekPink['200'],
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentSoft,
  brandAccentSoftActive: darken(0.05, brandAccentSoft),
  brandAccentSoftHover: darken(0.025, brandAccentSoft),
  tokenOverrides: {
    legacy: false,
    typography: {
      fontFamily: 'SeekSans, "SeekSans Fallback", Arial, Tahoma, sans-serif',
      webFont: 'https://www.seek.com.au/static/shared-web/seeksans.css',
      fontMetrics: {
        capHeight: 783,
        ascent: 1057,
        descent: -274,
        lineGap: 0,
        unitsPerEm: 1000,
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
    touchableSize: 12,
    border: {
      width: {
        standard: 2,
        large: 4,
      },
      radius: {
        small: '4px',
        standard: '8px',
        large: '16px',
        xlarge: '24px',
      },
      color: {
        formAccent: palette.seekBlueLight['700'],
        formAccentLight: palette.seekBlueLight['300'],
        focus: rgba(palette.seekBlueLight['300'], 0.7),
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
        neutralLight: palette.grey['100'],
      },
    },
    color: {
      foreground: {
        formAccent: palette.seekBlueLight['700'],
        formAccentLight: palette.seekBlueLight['300'],
        link: palette.grey['700'],
        linkHover: palette.grey['700'],
        linkLight: '#fff',
        linkVisited: palette.purple['800'],
        linkLightVisited: palette.purple['200'],
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
        rating: palette.seekPink['500'],
      },
      background: {
        body: '#fff',
        bodyDark: palette.grey['800'],
        formAccent: palette.seekBlueLight['700'],
        formAccentActive: darken(0.05, palette.seekBlueLight['700']),
        formAccentHover: lighten(0.075, palette.seekBlueLight['700']),
        formAccentSoft: palette.seekBlueLight['50'],
        formAccentSoftActive: darken(0.05, palette.seekBlueLight['50']),
        formAccentSoftHover: darken(0.025, palette.seekBlueLight['50']),
        promote: palette.purple['700'],
        promoteLight: palette.purple['100'],
        neutralLight: palette.grey['75'],
        neutralSoft: palette.grey['75'],
        neutralSoftActive: darken(0.05, palette.grey['75']),
        neutralSoftHover: darken(0.025, palette.grey['75']),
      },
    },
  },
});
