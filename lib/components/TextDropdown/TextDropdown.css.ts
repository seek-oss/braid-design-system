import { style } from '@mattsjones/css-core';
import { negate } from '@mattsjones/css-utils';
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
    top: negate(themeVars.space.xxsmall),
    bottom: negate(themeVars.space.xxsmall),
    left: negate(themeVars.space.xxsmall),
    right: negate(themeVars.space.xxsmall),
  }),
];
