export default {
  '.root': {
    position: 'relative',
    cursor: 'pointer',
    width: '31px',
    height: '27px',
    border: 0,
    background: 'none',
    transition: 'all .1s ease',
    '&.root_isHidden': {
      opacity: 0,
      pointerEvents: 'none',
    },
    '@media screen and (min-width: 740px)': {
      display: 'none',
    },
  },
  '.bar': {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '5px',
    borderRadius: '5px',
    background: 'black',
    transition: 'all .1s ease',
    transformOrigin: '50% 50%',
  },
  '.bar1': {
    top: 0,
    '.root_isOpen &': {
      transform: 'translateY(11px) rotate(45deg)',
    },
  },
  '.bar2': {
    top: '11px',
    '.root_isOpen &': {
      opacity: 0,
    },
  },
  '.bar3': {
    top: '22px',
    '.root_isOpen &': {
      transform: 'translateY(-11px) rotate(-45deg)',
    },
  },
};
