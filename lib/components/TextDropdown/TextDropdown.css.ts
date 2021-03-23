import { style } from '@mattsjones/css-core';
import { calc } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';
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
    top: calc.negate(themeVars.space.xxsmall),
    bottom: calc.negate(themeVars.space.xxsmall),
    left: calc.negate(themeVars.space.xxsmall),
    right: calc.negate(themeVars.space.xxsmall),
  }),
];
