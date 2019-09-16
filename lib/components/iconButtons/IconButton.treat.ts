import { style } from 'sku/treat';

export const button = style({});

export const hoverOverlay = style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1,
    },
    [`${button}:active &`]: {
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
