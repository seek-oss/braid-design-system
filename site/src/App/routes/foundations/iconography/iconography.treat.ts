import { style } from 'sku/treat';

export const icon = style({
  width: 120,
});

export const iconContainer = style({});

export const overlay = style({
  selectors: {
    [`${iconContainer}:hover > &`]: {
      opacity: 0.4,
    },
  },
});
