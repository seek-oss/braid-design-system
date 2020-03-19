import { globalStyle, style } from 'sku/treat';

const menuWidth = 240;
const headerHeight = 76;

export const isOpen = style({});

export const header = style(({ utils }) =>
  utils.responsiveStyle({
    mobile: {
      zIndex: 1,
    },
    tablet: {
      position: 'fixed',
    },
  }),
);

export const container = style({
  maxHeight: '100vh',
});

export const menu = style(({ breakpoint, space, grid }) => ({
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      top: headerHeight + space.medium * grid,
      selectors: {
        [`&:not(${isOpen})`]: {
          opacity: 0,
        },
      },
    },
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      top: headerHeight + space.large * grid,
      width: menuWidth,
    },
  },
}));

export const content = style(({ breakpoint, space, grid }) => ({
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      paddingTop: headerHeight + space.medium * grid,
      selectors: {
        [`&${isOpen}`]: {
          transform: `translateX(${menuWidth + space.gutter * grid}px)`,
          opacity: 0.4,
        },
      },
    },
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      paddingTop: headerHeight + space.large * grid,
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
