import { style } from '@vanilla-extract/css';

export const menuItem = style({
  whiteSpace: 'nowrap',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
