import { globalStyle, style } from 'sku/treat';

const menuWidth = 300;
const headerHeight = 96;

export const isOpen = style({});

export const preventContentScroll = style({
  maxHeight: '100vh',
});

export const sideBar = style(({ breakpoint }) => ({
  zIndex: 1,
  '@media': {
    [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
      maxWidth: 400,
      selectors: {
        [`&:not(${isOpen})`]: {
          transform: 'translateX(-10%)',
          opacity: 0,
        },
      },
    },
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: menuWidth,
    },
  },
}));

export const subNavigationContainer = style(({ utils }) => ({
  top: headerHeight,
  zIndex: 2,
}));

export const header = style({
  zIndex: 2,
});

export const mockHeader = style({
  opacity: 0,
  transform: 'translateY(-16px)',
});

export const content = style(({ utils }) =>
  utils.responsiveStyle({
    mobile: {
      top: headerHeight,
    },
    tablet: {
      marginLeft: menuWidth,
    },
  }),
);

// export const isOpen = style({});

// export const header = style(({ utils }) =>
//   utils.responsiveStyle({
//     mobile: {
//       zIndex: 1,
//     },
//     tablet: {
//       position: 'fixed',
//     },
//   }),
// );

// export const container = style({
//   maxHeight: '100vh',
// });

// export const menu = style(({ breakpoint, space, grid }) => ({
//   '@media': {
//     [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
//       top: headerHeight + space.medium * grid,
//       selectors: {
//         [`&:not(${isOpen})`]: {
//           opacity: 0,
//         },
//       },
//     },
//     [`screen and (min-width: ${breakpoint.tablet}px)`]: {
//       top: headerHeight + space.large * grid,
//       width: menuWidth,
//     },
//   },
// }));

// export const content = style(({ breakpoint, space, grid }) => ({
//   '@media': {
//     [`screen and (max-width: ${breakpoint.tablet - 1}px)`]: {
//       paddingTop: headerHeight + space.medium * grid,
//       selectors: {
//         [`&${isOpen}`]: {
//           transform: `translateX(${menuWidth + space.gutter * grid}px)`,
//           opacity: 0.4,
//         },
//       },
//     },
//     [`screen and (min-width: ${breakpoint.tablet}px)`]: {
//       paddingTop: headerHeight + space.large * grid,
//       marginLeft: `${menuWidth}px`,
//     },
//   },
// }));

globalStyle('html, body', {
  margin: 0,
  minHeight: '100%',
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
