import { style } from 'sku/treat';

export const fieldContainer = style({
  position: 'relative',
});

export const field = style({
  outline: 'none',
});

export const focusOverlay = style({
  selectors: {
    [`${field}:focus ~ &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${field}:hover:not(:disabled) ~ &`]: {
      opacity: 1,
    },
  },
});
