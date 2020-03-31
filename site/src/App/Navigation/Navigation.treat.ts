import { globalStyle, style } from 'sku/treat';
import { pageOverlay } from '../../../../lib/components/private/zIndex';

const menuWidth = 300;

export const isOpen = style({});

const bodyBackground = style(({ color }) => ({
  background: color.background.body,
}));

const headerOffset = style(({ utils }) =>
  utils.responsiveStyle({
    mobile: {
      top: 96,
    },
    tablet: {
      top: 120,
    },
  }),
);

const fixedWidthAboveMobile = style(({ utils, space, grid }) =>
  utils.responsiveStyle({
    tablet: {
      width: menuWidth - grid * space.medium,
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

export const scrollLock = style({
  overflow: 'hidden',
});

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

export const stickyHeader = [bodyBackground];

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
