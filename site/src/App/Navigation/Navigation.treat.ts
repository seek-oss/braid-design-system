import { globalStyle, style } from 'sku/treat';
import { pageOverlay } from '../../../../lib/components/private/zIndex';
import { menuWidth, headerHeight, gutterSize } from './navigationSizes';

export const isOpen = style({});

const bodyBackground = style(({ color }) => ({
  background: color.background.body,
}));

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

const overlay = style({
  zIndex: pageOverlay,
});

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

export const hide = style({
  opacity: 0,
});

export const subNavigationContainer = [
  headerOffset,
  bodyBackground,
  overlay,
  fixedWidthAboveMobile,
  hideOnMobileWhenClosed,
];

export const pageContent = [
  headerOffset,
  subNavOffsetAboveMobile,
  hideOnMobileWhenOpen,
];

export const stickyHeader = [overlay, bodyBackground];

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});
