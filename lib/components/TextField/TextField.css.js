export default {
  '.root': {
    position: 'relative',
  },
  '.input:focus': {
    outline: 'none',
  },
  '.focusOverlay': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.2s',
    '.input:focus ~ &': {
      opacity: 1,
    },
  },
};
