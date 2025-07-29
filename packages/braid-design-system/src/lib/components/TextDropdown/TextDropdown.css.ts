import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { outlineStyle } from '../../css/outlineStyle';
import { debugTouchable } from '../private/touchable/debugTouchable';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

import { vars } from '../../themes/vars.css';

export const select = style([
  {
    ...virtualTouchableRules,
  },
  debugTouchable(),
]);

export const focusRing = style([
  outlineStyle(`${select}:focus-visible ~ &`),
  atoms({
    borderRadius: 'small',
  }),
  {
    outlineOffset: vars.space.xxsmall,
  },
]);
