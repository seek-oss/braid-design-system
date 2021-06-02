import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import {
  breakpoints,
  responsiveStyle,
} from '../../../../lib/themes/vanillaUtils';
import { vars } from '../../../../lib/themes/vars.css';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const headerOffset = style(
  responsiveStyle({
    mobile: {
      top: headerHeight,
    },
    desktop: {
      top: calc.add(headerHeight, vars.space[gutterSize]),
    },
  }),
);

const fixedWidthAboveMobile = style(
  responsiveStyle({
    desktop: {
      width: calc.subtract(menuWidth, vars.space[gutterSize]),
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
      marginLeft: calc.subtract(menuWidth, vars.space[gutterSize]),
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
