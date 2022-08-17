import { style } from '@vanilla-extract/css';

export const menuItem = style({
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
