import { style } from '@vanilla-extract/css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export const button = style([
  {
    ':hover': {
      zIndex: 1,
    },
    selectors: {
      [`&::-moz-focus-inner`]: {
        border: 0,
      },
    },
  },
  virtualTouchable,
]);
