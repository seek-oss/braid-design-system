import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { debugTouchable } from '../private/touchable/debugTouchable';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

import { vars } from '../../themes/vars.css';

export const select = style([
  {
    ...virtualTouchableRules,
  },
  debugTouchable(),
]);

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
