import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

export const select = style({
  ...virtualTouchableRules,
});

export const focusOverlay = [
  style({
    selectors: {
      [`${select}:focus ~ &`]: {
        opacity: 1,
      },
    },
  }),
  style({
    top: calc.negate(vars.space.xxsmall),
    bottom: calc.negate(vars.space.xxsmall),
    left: calc.negate(vars.space.xxsmall),
    right: calc.negate(vars.space.xxsmall),
  }),
];
