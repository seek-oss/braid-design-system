const desktopMenuWidth = '270px';
const headerHeight = '80px';

export default {
  ':global(html), :global(body)': {
    margin: 0
  },
  '.header': {
    background: 'white',
    position: 'fixed',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    height: headerHeight,
    '@media screen and (min-width: 740px)': {
      width: desktopMenuWidth
    }
  },
  '.menuButton': {
    position: 'absolute',
    cursor: 'pointer',
    top: '1px',
    right: 0,
    bottom: 0,
    width: '31px',
    '@media screen and (min-width: 740px)': {
      display: 'none'
    }
  },
  '.menuButton__bar': {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '5px',
    borderRadius: '5px',
    background: 'black',
    transition: 'all .1s ease',
    transformOrigin: '50% 50%'
  },
  '.menuButton__bar1': {
    top: 0,
    '.menuButton__isOpen &': {
      transform: 'translateY(11px) rotate(45deg)'
    }
  },
  '.menuButton__bar2': {
    top: '11px',
    '.menuButton__isOpen &': {
      opacity: 0
    }
  },
  '.menuButton__bar3': {
    top: '22px',
    '.menuButton__isOpen &': {
      transform: 'translateY(-11px) rotate(-45deg)'
    }
  },
  '.container': {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
    '@media screen and (min-width: 740px)': {
      flexDirection: 'row',
      paddingLeft: desktopMenuWidth
    }
  },
  '.menu': {
    background: 'white',
    flexGrow: 0,
    position: 'fixed',
    zIndex: 2,
    width: '100%',
    top: headerHeight,
    left: 0,
    bottom: 0,
    overflow: 'auto',
    '@media screen and (max-width: 739px)': {
      transition: 'all .1s ease',
      opacity: 0,
      transform: 'translateY(-5px)',
      pointerEvents: 'none',
      '&.menu__isOpen': {
        opacity: 1,
        transform: 'none',
        pointerEvents: 'auto'
      }
    },
    '@media screen and (min-width: 740px)': {
      width: desktopMenuWidth
    }
  },
  '.content': {
    flexGrow: 1,
    paddingTop: headerHeight
  }
};
