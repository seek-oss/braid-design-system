import { style } from 'sku/treat';

export const menuItem = style({
  outline: 'none',
  whiteSpace: 'nowrap',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
