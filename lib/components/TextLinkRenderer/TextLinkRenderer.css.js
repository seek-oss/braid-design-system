export default {
  '.root': {
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '.root_isButton': {
    outline: 'none',
    textAlign: 'center',
  },
  '.overlayContainer': {
    display: 'block',
    position: 'relative',
  },
  '.focusOverlay': {
    opacity: 0,
    '.root:focus ~ &': {
      opacity: 1,
    },
  },
};
