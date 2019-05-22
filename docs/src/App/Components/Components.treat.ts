import { globalStyle, style } from 'sku/treat';

const desktopMenuWidth = '270px';
const headerHeight = '96px';

const breakpoint = 740;

const mobile = `screen and (max-width: ${breakpoint - 1}px)`;
const desktop = `screen and (min-width: ${breakpoint}px)`;

export const header = style({
  position: 'fixed',
  background: 'white',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 3,
  '@media': {
    [desktop]: {
      width: desktopMenuWidth,
    },
  },
});

export const container = style({
  paddingTop: headerHeight,
});

export const menuOpen = style({});

export const menu = style({
  position: 'fixed',
  zIndex: 2,
  top: headerHeight,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'auto',
  transition: 'opacity .2s ease, transform .2s ease',
  '@media': {
    [mobile]: {
      background: 'white',
      opacity: 0,
      transform: 'translateY(-5px)',
      pointerEvents: 'none',
      selectors: {
        [`&${menuOpen}`]: {
          opacity: 1,
          transform: 'none',
          pointerEvents: 'auto',
        },
      },
    },
    [desktop]: {
      width: desktopMenuWidth,
    },
  },
});

export const content = style({
  flexGrow: 1,
  '@media': {
    [mobile]: {
      opacity: 1,
      pointerEvents: 'auto',
      transition: 'opacity .1s ease, transform .3s ease',
    },
    [desktop]: {
      paddingLeft: `${desktopMenuWidth} !important`,
    },
  },
});

globalStyle('html, body', {
  margin: 0,
});

// :focus-visible polyfill: https://github.com/WICG/focus-visible
globalStyle('.js-focus-visible :focus:not(.focus-visible)', {
  outline: 'none',
});
