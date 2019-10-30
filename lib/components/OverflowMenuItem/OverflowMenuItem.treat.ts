import { style } from 'sku/treat';

export const menuItem = style({
  textAlign: 'left',
  outline: 'none',
  whiteSpace: 'nowrap',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
