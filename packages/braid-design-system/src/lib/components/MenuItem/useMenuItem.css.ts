import { style } from '@vanilla-extract/css';

export const menuItem = style({
  outline: 'none',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const menuItemLeftSlot = style({
  height: '0px', // Prevents the slot from affecting the height of the MenuItem
});
