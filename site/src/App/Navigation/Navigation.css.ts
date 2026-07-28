import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { breakpoints, responsiveStyle, vars } from 'braid-design-system/css';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';

import {
  menuWidth,
  headerHeight,
  gutterSize,
  contentBlockXLWidth,
} from './navigationSizes';

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

/**
 * Applied to the page content when a side navigation column is present, to
 * offset the content clear of the fixed sidebar. Omitted on the landing page,
 * which is full width.
 */
export const subNavOffset = subNavOffsetAboveMobile;

/**
 * Hides the fixed side navigation column on wide screens (used on the landing
 * page). The mobile navigation menu overlay is unaffected.
 */
export const hideSideNavOnWide = style(
  responsiveStyle({
    wide: {
      display: 'none',
    },
  }),
);

export const sideNavigationBorder = style(
  colorModeStyle({
    lightMode: {
      borderRight: `1px solid ${vars.borderColor.neutralLight}`,
    },
    darkMode: {
      borderRight: `1px solid ${vars.borderColor.neutral}`,
    },
  }),
);

export const sideNavigationContainer = style([
  headerOffset,
  fixedWidthAboveVisibleBreakpoint,
  hideSideNavOnSmallerScreensWhenClosed,
  sideNavigationBorder,
]);

export const pageContent = style([
  headerOffset,
  hidePageContentOnSmallerScreensWhenOpen,
]);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
  // Allows full-bleed elements (see routes/home) to span the viewport width
  // without introducing a horizontal scrollbar.
  overflowX: 'clip',
});

export const maxWidthFull = style({
  maxWidth: '100%',
});

export const contentBlockXL = style({
  marginInline: 'auto',
  maxWidth: contentBlockXLWidth,
});

export const fixedNavigationContainer = style(
  colorModeStyle({
    lightMode: {
      borderBottom: `1px solid ${vars.borderColor.neutralLight}`,
    },
    darkMode: {
      borderBottom: `1px solid ${vars.borderColor.neutral}`,
    },
  }),
);
