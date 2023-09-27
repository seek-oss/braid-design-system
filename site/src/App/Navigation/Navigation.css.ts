import { rgba } from 'polished';
import { style, globalStyle, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-src/lib/themes/vars.css';
import { palette } from 'braid-src/lib/color/palette';
import {
  breakpoints,
  responsiveStyle,
  colorModeStyle,
} from 'braid-src/entries/css';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const headerOffset = style({
  top: headerHeight,
});

const fixedWidthAboveMobile = style(
  responsiveStyle({
    wide: {
      width: calc.subtract(menuWidth, vars.space[gutterSize]),
    },
  }),
);

const hideOnMobileWhenOpen = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.wide - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          opacity: 0,
        },
      },
    },
  },
});

const hideOnMobileWhenClosed = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.wide - 1}px)`]: {
      selectors: {
        [`&:not(${isOpen})`]: {
          opacity: 0,
        },
      },
    },
  },
});

const subNavOffsetAboveMobile = style(
  responsiveStyle({
    wide: {
      marginLeft: calc.subtract(menuWidth, vars.space[gutterSize]),
    },
  }),
);

const backgroundVar = createVar();
const shadowVar = createVar();
const transparent = 'rgba(0, 0, 0, 0)';
const scrollShadows = style([
  colorModeStyle({
    lightMode: {
      vars: {
        [backgroundVar]: vars.backgroundColor.body,
        [shadowVar]: rgba(palette.grey['800'], 0.2),
      },
      backgroundImage: [
        `linear-gradient(${backgroundVar} 30%, ${transparent})`,
        `radial-gradient(farthest-side at 50% 0, ${shadowVar}, ${transparent})`,
      ].join(', '),
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 40px, 100% 18px',
      backgroundAttachment: 'local, scroll',
    },
    darkMode: {
      vars: {
        [backgroundVar]: vars.backgroundColor.bodyDark,
        [shadowVar]: palette.grey['800'],
      },
      backgroundImage: [
        `linear-gradient(45deg, ${backgroundVar}, ${backgroundVar})`,
        `linear-gradient(90deg, ${transparent}, ${shadowVar} 15%, ${shadowVar} 85%, ${transparent})`,
      ].join(', '),
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 2px',
      backgroundAttachment: 'local, scroll',
    },
  }),
]);

export const subNavigationContainer = style([
  headerOffset,
  fixedWidthAboveMobile,
  hideOnMobileWhenClosed,
  scrollShadows,
]);

export const pageContent = style([
  headerOffset,
  subNavOffsetAboveMobile,
  hideOnMobileWhenOpen,
]);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});
