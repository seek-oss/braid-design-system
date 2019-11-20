import { globalStyle, style } from 'sku/treat';

const desktopMenuWidth = '276px';
const headerHeight = '100px';

export const isOpen = style({});

export const header = style(({ utils }) =>
  utils.responsiveStyle({
    mobile: {
      background: 'white',
      zIndex: 3,
      selectors: {
        [`${isOpen} &`]: {
          position: 'fixed',
        },
      },
    },
    desktop: {
      position: 'fixed',
      width: desktopMenuWidth,
    },
  }),
);

export const container = style({
  paddingTop: headerHeight,
});

export const menu = style(theme => ({
  zIndex: 2,
  top: headerHeight,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'auto',
  transition: 'opacity .2s ease, transform .2s ease',
  '@media': {
    [`screen and (max-width: ${theme.breakpoint.desktop - 1}px)`]: {
      background: 'white',
      opacity: 0,
      transform: 'translateY(-5px)',
      pointerEvents: 'none',
      selectors: {
        [`${isOpen} &`]: {
          opacity: 1,
          transform: 'none',
          pointerEvents: 'auto',
        },
      },
    },
    [`screen and (min-width: ${theme.breakpoint.desktop}px)`]: {
      width: desktopMenuWidth,
    },
  },
}));

export const logo = style({
  width: 36,
  overflow: 'hidden',
});

export const content = style(theme => ({
  flexGrow: 1,
  paddingBottom: 80,
  '@media': {
    [`screen and (max-width: ${theme.breakpoint.desktop - 1}px)`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transition: 'opacity .1s ease, transform .3s ease',
    },
    [`screen and (min-width: ${theme.breakpoint.desktop}px)`]: {
      paddingLeft: `${desktopMenuWidth} !important`,
    },
  },
}));

globalStyle('html, body', {
  margin: 0,
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
