import { style } from 'sku/treat';

export const menuItem = style({
  whiteSpace: 'nowrap',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
