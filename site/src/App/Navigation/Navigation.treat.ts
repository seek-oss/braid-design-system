import { globalStyle, style } from 'sku/treat';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const headerOffset = style(({ utils, grid, space }) =>
  utils.responsiveStyle({
    mobile: {
      top: headerHeight,
    },
    tablet: {
      top: headerHeight + grid * space[gutterSize],
    },
  }),
);

const fixedWidthAboveMobile = style(({ utils, space, grid }) =>
  utils.responsiveStyle({
    tablet: {
      width: menuWidth - grid * space[gutterSize],
    },
  }),
);

const hideOnMobileWhenOpen = style(({ breakpoint }) => ({
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          opacity: 0,
        },
      },
    },
  },
}));

const hideOnMobileWhenClosed = style(({ breakpoint }) => ({
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      selectors: {
        [`&:not(${isOpen})`]: {
          opacity: 0,
        },
      },
    },
  },
}));

const subNavOffsetAboveMobile = style(({ utils }) =>
  utils.responsiveStyle({
    tablet: {
      marginLeft: menuWidth,
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

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});
