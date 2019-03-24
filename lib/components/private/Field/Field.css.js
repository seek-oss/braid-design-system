export default {
  '.fieldContainer': {
    position: 'relative',
  },
  '.field:focus': {
    outline: 'none',
  },
  '.field:focus ~ .focusOverlay': {
    opacity: 1,
  },
  '.field:hover ~ .hoverOverlay': {
    opacity: 1,
  },
};
