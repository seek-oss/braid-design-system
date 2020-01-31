import { style } from 'sku/treat';

export const button = style({
  outline: 'none',
  zIndex: 0,
  ':hover': {
    zIndex: 1,
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const forceActive = style({});

export const hoverOverlay = style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1,
    },
    [`${button}:active &, ${forceActive}&`]: {
      opacity: 0.8,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${button}:focus &`]: {
      opacity: 1,
    },
  },
});
