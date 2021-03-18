import { style } from '@mattsjones/css-core';
import { add, subtract } from '@mattsjones/css-utils';
import {
  breakpoints,
  responsiveStyle,
} from '../../../../lib/themes/nextThemeUtils';
import { themeVars } from '../../../../lib/themes/themeVars.css';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const headerOffset = style(
  responsiveStyle({
    mobile: {
      top: headerHeight,
    },
    desktop: {
      top: add(headerHeight, themeVars.space[gutterSize]),
    },
  }),
);

const fixedWidthAboveMobile = style(
  responsiveStyle({
    desktop: {
      width: subtract(menuWidth, themeVars.space[gutterSize]),
    },
  }),
);

const hideOnMobileWhenOpen = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.desktop - 1}px)`]: {
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
    [`screen and (max-width: ${breakpoints.desktop - 1}px)`]: {
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
    desktop: {
      marginLeft: subtract(menuWidth, themeVars.space[gutterSize]),
    },
  }),
);

export const subNavigationContainer = [
  headerOffset,
  fixedWidthAboveMobile,
  hideOnMobileWhenClosed,
];

export const pageContent = [
  headerOffset,
  subNavOffsetAboveMobile,
  hideOnMobileWhenOpen,
];

// TODO:
// globalStyle('html, body', {
//   margin: 0,
//   minHeight: '100%',
// });
