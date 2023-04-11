import { lighten, darken, saturate, rgba } from 'polished';
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
      fontFamily: 'SeekSans, "SeekSans Fallback", Arial',
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
      gutter: 8,
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
        formAccent: palette.violet['500'],
        formAccentLight: palette.violet['300'],
        focus: rgba(palette.violet['300'], 0.7),
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
        neutralLight: palette.grey['100'],
      },
    },
    color: {
      foreground: {
        formAccent: palette.violet['500'],
        formAccentLight: palette.violet['300'],
        link: palette.violet['500'],
        linkHover: palette.violet['500'],
        linkLight: palette.violet['300'],
        linkVisited: palette.purple['600'],
        linkLightVisited: palette.purple['300'],
        promote: palette.purple['700'],
        promoteLight: palette.purple['300'],
        rating: palette.orange['600'],
      },
      background: {
        body: '#fff',
        bodyDark: palette.grey['800'],
        formAccent: palette.violet['500'],
        formAccentActive: darken(0.05, palette.violet['500']),
        formAccentHover: saturate(0.5, lighten(0.075, palette.violet['500'])),
        formAccentSoft: palette.violet['50'],
        formAccentSoftActive: darken(0.05, palette.violet['50']),
        formAccentSoftHover: darken(0.025, palette.violet['50']),
        promote: palette.purple['700'],
        promoteLight: palette.purple['100'],
      },
    },
  },
});
