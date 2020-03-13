import { globalStyle, style } from 'sku/treat';

const menuWidth = 240;
const headerHeight = '76px';

export const isOpen = style({});

export const header = style(({ utils }) =>
  utils.responsiveStyle({
    mobile: {
      zIndex: 3,
      selectors: {
        [`&${isOpen}`]: {
          position: 'fixed',
        },
      },
    },
    tablet: {
      position: 'fixed',
    },
  }),
);

export const container = style({
  paddingTop: headerHeight,
  marginBottom: headerHeight,
});

export const contentWrapper = style({
  top: headerHeight,
});

export const noContent = style({
  opacity: 0,
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
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      selectors: {
        [`&${isOpen}`]: {
          transform: `translateX(${menuWidth + space.gutter * 2 * grid}px)`,
          opacity: 0.6,
        },
      },
    },
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      marginLeft: `${menuWidth + space.gutter * grid}px`,
    },
  },
}));

globalStyle('html, body', {
  margin: 0,
  height: '100%',
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
