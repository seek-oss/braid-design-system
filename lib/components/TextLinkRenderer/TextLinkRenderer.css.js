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
  '.root:focus ~ .focusOverlay': {
    opacity: 1,
  },
};
