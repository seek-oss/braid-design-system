import { style } from 'sku/treat';

export const root = style({
  cursor: 'pointer',
  outline: 'none',
});

export const weak = style({
  backgroundColor: 'transparent',
});

const overlay = style({
  transition: 'opacity 0.2s',
  selectors: {
    [`${weak} &`]: {
      zIndex: 2,
    },
  },
});

export const activeOverlay = [
  overlay,
  style({
    selectors: {
      [`${root}:active &`]: {
        opacity: 1,
      },
      [`${weak}:active &`]: {
        opacity: 0.1,
      },
    },
  }),
];

export const hoverOverlay = [
  overlay,
  style({
    selectors: {
      [`${root}:hover:not(:active) &`]: {
        opacity: 1,
      },
      [`${weak}:hover:not(:active) &`]: {
        opacity: 0.075,
      },
    },
  }),
];

export const focusOverlay = [
  overlay,
  style({
    selectors: {
      [`${root}:focus &`]: {
        opacity: 1,
      },
    },
  }),
];

export const content = style({
  zIndex: 1,
  pointerEvents: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',
});
