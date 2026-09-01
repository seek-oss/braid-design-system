import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';
import { darken } from 'polished';

import { contentBlockXLWidth } from '../../Navigation/navigationSizes';


const canvasLight = darken(0.025, palette.grey['100']);

const heroBackgroundImage = {
  light:
    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAwIiBoZWlnaHQ9IjQ4NSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwMDAgNDg1Ij48Y2lyY2xlIGN4PSI1ODgiIGN5PSIyMjQiIHI9IjIwMCIgZmlsbD0iIzgzOEZBNSIvPjxjaXJjbGUgY3g9IjI4MTYiIGN5PSIxMTYiIHI9IjEwMCIgZmlsbD0iIzgzOEZBNSIvPjxwYXRoIGZpbGw9IiM3NDhDRjAiIGQ9Ik0zNDkgMGExMDAgMTAwIDAgMSAxLTE3MCAweiIvPjxwYXRoIGZpbGw9IiNEMkQ3REYiIGQ9Ik0yNjQzIDBhNDAxIDQwMSAwIDAgMS0zOTEgNDg0QTQwMCA0MDAgMCAwIDEgMTg2MSAweiIvPjwvc3ZnPg==")',
  dark: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAwIiBoZWlnaHQ9IjQ4NSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwMDAgNDg1Ij48Y2lyY2xlIGN4PSI1ODgiIGN5PSIyMjQiIHI9IjIwMCIgZmlsbD0iIzVBNjg4MSIvPjxjaXJjbGUgY3g9IjI4MTYiIGN5PSIxMTYiIHI9IjEwMCIgZmlsbD0iIzVBNjg4MSIvPjxwYXRoIGZpbGw9IiM0MTRDNjMiIGQ9Ik0zNDkgMGExMDAgMTAwIDAgMSAxLTE3MCAweiIvPjxwYXRoIGZpbGw9IiMyRTM4NDkiIGQ9Ik0yNjQzIDBhNDAxIDQwMSAwIDAgMS0zOTEgNDg0QTQwMCA0MDAgMCAwIDEgMTg2MSAweiIvPjwvc3ZnPg==")',
} as const;

export const hero = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    paddingY: 'xxlarge',
  }),
  colorModeStyle({
    lightMode: {
      backgroundColor: canvasLight,
      backgroundImage: heroBackgroundImage.light,
    },
    darkMode: {
      backgroundColor: vars.backgroundColor.neutral,
      backgroundImage: heroBackgroundImage.dark,
    },
  }),
  {
    marginInline: 'calc(50% - 50vw)',
    minHeight: '50vh',
    marginTop: calc.negate(calc.add(vars.space.small, vars.space.xxlarge)),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'auto 100%',
  },
]);

export const contentColumn = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    paddingX: { mobile: 'medium', wide: 'xxlarge' },
  }),
  {
    maxWidth: contentBlockXLWidth,
    marginInline: 'auto',
  },
]);

export const heroColumn = style({
  minWidth: 0,
});

globalStyle(`${hero} ${heroColumn}`, {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%',
});

export const gettingStartedCard = style([
  atoms({
    paddingX: 'xlarge',
    paddingY: 'xxlarge',
    borderRadius: 'large',
  }),
  colorModeStyle({
    lightMode: {
      backgroundColor: canvasLight,
    },
    darkMode: {
      backgroundColor: vars.backgroundColor.neutral,
    },
  }),
]);

