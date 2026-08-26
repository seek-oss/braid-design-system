import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { responsiveStyle } from 'braid-src/lib/css/responsiveStyle';
import { vars } from 'braid-src/lib/themes/vars.css';
import { darken } from 'polished';

import {
  illustrationCanvas,
  illustrationFills,
} from '../../LandingCard/illustrationPalette';
import { contentBlockXLWidth } from '../../Navigation/navigationSizes';

import {
  card,
  inColorMode,
  linkOverlay,
} from '../../LandingCard/LandingCard.css';

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
    minHeight: '40vh',
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

export const heroCopy = style(
  responsiveStyle({
    mobile: { maxWidth: '100%' },
    desktop: { maxWidth: '50%' },
  }),
);

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

const destinationColorTransition = '250ms ease';
const hoveredDestination = `${linkOverlay}:hover + ${card} &, ${linkOverlay}:focus-visible + ${card} &`;
const inMode = (mode: keyof typeof inColorMode, selector: string) =>
  `${inColorMode[mode]} ${selector.replaceAll(', ', `, ${inColorMode[mode]} `)}`;

const destinationRest = colorModeStyle({
  lightMode: {
    backgroundColor: illustrationCanvas.rest.light,
    color: illustrationFills.neutral.rest.light,
  },
  darkMode: {
    backgroundColor: illustrationCanvas.rest.dark,
    color: illustrationFills.neutral.rest.dark,
  },
});

export const destinationIcon = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'large',
  }),
  destinationRest,
  {
    width: 56,
    height: 56,
    transition: `background-color ${destinationColorTransition}, color ${destinationColorTransition}`,
    selectors: {
      ...destinationRest.selectors,
      [inMode('light', hoveredDestination)]: {
        backgroundColor: illustrationCanvas.hover.light,
        color: illustrationFills.neutral.hover.light,
      },
      [inMode('dark', hoveredDestination)]: {
        backgroundColor: illustrationCanvas.hover.dark,
        color: illustrationFills.neutral.hover.dark,
      },
    },
  },
]);

export const destinationGlyph = style({
  width: 28,
  height: 28,
  color: 'inherit',
});

globalStyle(`${destinationIcon} svg`, {
  color: 'inherit',
  fill: 'currentColor',
  transition: `fill ${destinationColorTransition}`,
});
