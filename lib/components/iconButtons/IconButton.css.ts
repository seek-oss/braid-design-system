import { style } from '@vanilla-extract/css';

export const button = style({
  ':hover': {
    zIndex: 1,
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});
