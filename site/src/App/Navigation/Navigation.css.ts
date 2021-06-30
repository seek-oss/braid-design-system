import { style, globalStyle, composeStyles } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars, breakpoints, responsiveStyle } from '../../../../css';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const headerOffset = style(
  responsiveStyle({
    mobile: {
      top: headerHeight,
    },
    wide: {
      top: calc.add(headerHeight, vars.space[gutterSize]),
    },
  }),
);

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

export const subNavigationContainer = composeStyles(
  headerOffset,
  fixedWidthAboveMobile,
  hideOnMobileWhenClosed,
);

export const pageContent = composeStyles(
  headerOffset,
  subNavOffsetAboveMobile,
  hideOnMobileWhenOpen,
);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});
