import {
  style,
  globalStyle,
  composeStyles,
  StyleRule,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../../lib/themes/vars.css';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

const navBreakpoint = 1136;
const widescreen = (styles: StyleRule) => ({
  '@media': {
    [`screen and (min-width: ${navBreakpoint}px)`]: styles,
  },
});

export const isOpen = style({});

const headerOffset = style({
  top: headerHeight,
  ...widescreen({
    top: calc.add(headerHeight, vars.space[gutterSize]),
  }),
});

export const menuButton = style(
  widescreen({
    display: 'none',
  }),
);

const fixedWidthAboveMobile = style(
  widescreen({
    width: calc.subtract(menuWidth, vars.space[gutterSize]),
  }),
);

const hideOnMobileWhenOpen = style({
  '@media': {
    [`screen and (max-width: ${navBreakpoint - 1}px)`]: {
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
    [`screen and (max-width: ${navBreakpoint - 1}px)`]: {
      selectors: {
        [`&:not(${isOpen})`]: {
          opacity: 0,
        },
      },
    },
  },
});

const subNavOffsetAboveMobile = style(
  widescreen({
    marginLeft: calc.subtract(menuWidth, vars.space[gutterSize]),
  }),
);

export const subNavigationContainer = composeStyles(
  headerOffset,
  fixedWidthAboveMobile,
  hideOnMobileWhenClosed,
  style(widescreen({ display: 'block !important' })),
);

export const pageContent = composeStyles(
  headerOffset,
  subNavOffsetAboveMobile,
  hideOnMobileWhenOpen,
  style(
    widescreen({
      paddingLeft: vars.space.xxlarge,
      paddingRight: vars.space.xxlarge,
    }),
  ),
);

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});
