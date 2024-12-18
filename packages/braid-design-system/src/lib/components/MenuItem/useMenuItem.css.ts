import { style } from '@vanilla-extract/css';

export const menuItem = style({
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const menuItemLeftSlot = style({
  height: '0px',
});
