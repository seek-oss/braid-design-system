import { globalStyle, style } from 'sku/treat';

const menuWidth = 240;
const headerHeight = 76;

export const isOpen = style({});

export const header = style(({ utils }) => ({
  width: menuWidth,
  ...utils.responsiveStyle({
    tablet: {
      position: 'fixed',
    },
  }),
}));

export const noContent = style({
  opacity: 0,
});

export const container = style({
  maxHeight: '100vh',
});

export const menu = style(({ breakpoint }) => ({
  top: headerHeight,
  width: menuWidth,
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

export const content = style(({ breakpoint, space, grid }) => ({
  paddingTop: headerHeight,
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          transform: `translateX(${menuWidth + space.gutter * grid}px)`,
          opacity: 0.4,
        },
      },
    },
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      marginLeft: `${menuWidth}px`,
    },
  },
}));

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
