import { style } from 'sku/treat';

export const button = style({
  cursor: 'pointer',
  outline: 'none',
});

const overlay = style({
  transition: 'opacity 0.2s',
});

export const activeOverlay = [
  overlay,
  style({
    selectors: {
      [`${button}:active &`]: {
        opacity: 1,
      },
    },
  }),
];

export const hoverOverlay = [
  overlay,
  style({
    selectors: {
      [`${button}:hover:not(:active) &`]: {
        opacity: 1,
      },
    },
  }),
];

export const focusOverlay = [
  overlay,
  style({
    selectors: {
      [`${button}:focus &`]: {
        opacity: 1,
      },
    },
  }),
];

export const buttonText = style({
  pointerEvents: 'none',
  userSelect: 'none',
});
