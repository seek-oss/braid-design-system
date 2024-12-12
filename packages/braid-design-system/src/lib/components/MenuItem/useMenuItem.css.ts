import { style } from '@vanilla-extract/css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';
import { vars } from '../../themes/vars.css';

export const menuItem = style({
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const small = style([
  virtualTouchable,
  { paddingBlock: vars.space.xxsmall },
]);
