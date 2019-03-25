export default {
  '.root': {
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',

    '&.weak': {
      backgroundColor: 'transparent',
      '.activeOverlay, .hoverOverlay, .focusOverlay': {
        zIndex: 2,
      },
      '&:active .activeOverlay': {
        opacity: 0.1,
      },
      '&:hover:not(:active) .hoverOverlay': {
        opacity: 0.075,
      },
    },

    '.activeOverlay, .hoverOverlay, .focusOverlay': {
      transition: 'opacity 0.2s',
    },
    '&:active .activeOverlay': {
      opacity: 1,
    },
    '&:hover:not(:active) .hoverOverlay': {
      opacity: 1,
    },
    '&:focus .focusOverlay': {
      opacity: 1,
    },
  },
  '.content': {
    position: 'relative',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
};
