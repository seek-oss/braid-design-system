import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { breakpoints, responsiveStyle } from 'braid-src/css';
import { vars } from 'braid-src/lib/themes/vars.css';

import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

export const visibleNavBreakpoint = 'wide' as const;

const headerOffset = style({
  top: headerHeight,
});

const fixedWidthAboveVisibleBreakpoint = style(
  responsiveStyle({
    [visibleNavBreakpoint]: {
      width: calc.subtract(menuWidth, vars.space[gutterSize]),
    },
  }),
);

const hidePageContentOnSmallerScreensWhenOpen = style({
  '@media': {
    [`screen and (max-width: ${breakpoints[visibleNavBreakpoint] - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          opacity: 0,
          pointerEvents: 'none',
        },
      },
    },
  },
});

const hideSideNavOnSmallerScreensWhenClosed = style({
  '@media': {
    [`screen and (max-width: ${breakpoints[visibleNavBreakpoint] - 1}px)`]: {
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
  fixedWidthAboveVisibleBreakpoint,
  hideSideNavOnSmallerScreensWhenClosed,
]);

export const pageContent = style([
  headerOffset,
  subNavOffsetAboveMobile,
  hidePageContentOnSmallerScreensWhenOpen,
]);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});

export const maxWidthFull = style({
  maxWidth: '100%',
});
