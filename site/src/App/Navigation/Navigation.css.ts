import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { breakpoints, responsiveStyle } from 'braid-src/entries/css';
import { vars } from 'braid-src/lib/themes/vars.css';

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

const hidePageContentOnMobileWhenOpen = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.wide - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          opacity: 0,
          pointerEvents: 'none',
        },
      },
    },
  },
});

const hideSideNavOnMobileWhenClosed = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.wide - 1}px)`]: {
      selectors: {
        [`&:not(${isOpen})`]: {
          opacity: 0,
          pointerEvents: 'none',
          transform: `translateY(${calc.negate(vars.space.xsmall)})`,
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

export const sideNavigationContainer = style([
  headerOffset,
  fixedWidthAboveMobile,
  hideSideNavOnMobileWhenClosed,
]);

export const pageContent = style([
  headerOffset,
  subNavOffsetAboveMobile,
  hidePageContentOnMobileWhenOpen,
]);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});

export const maxWidthFull = style({
  maxWidth: '100%',
});
