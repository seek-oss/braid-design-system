const desktopMenuWidth = '270px';
const headerHeight = '96px';

export default {
  ':global(html), :global(body)': {
    margin: 0,
  },
  // :focus-visible polyfill: https://github.com/WICG/focus-visible
  ':global(.js-focus-visible) :focus:not(:global(.focus-visible))': {
    outline: 'none',
  },
  '.header': {
    position: 'fixed',
    background: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 3,
    '@media screen and (min-width: 740px)': {
      width: desktopMenuWidth,
    },
  },
  '.container': {
    paddingTop: headerHeight,
  },
  '.menu': {
    position: 'fixed',
    zIndex: 2,
    top: headerHeight,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
    transition: 'opacity .2s ease, transform .2s ease',
    '@media screen and (max-width: 739px)': {
      background: 'white',
      opacity: 0,
      transform: 'translateY(-5px)',
      pointerEvents: 'none',
      '&.menu__isOpen': {
        opacity: 1,
        transform: 'none',
        pointerEvents: 'auto',
      },
    },
    '@media screen and (min-width: 740px)': {
      width: desktopMenuWidth,
    },
  },
  '.content': {
    flexGrow: 1,
    '@media screen and (max-width: 739px)': {
      opacity: 1,
      pointerEvents: 'auto',
      transition: 'opacity .1s ease, transform .3s ease',
      '&.content__isHidden': {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
    '@media screen and (min-width: 740px)': {
      paddingLeft: desktopMenuWidth,
    },
  },
};
