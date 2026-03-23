import { style } from '@vanilla-extract/css';

import { globalTextStyle } from 'braid-design-system/css';

import { atoms } from '../../css/atoms/atoms';
import { outlineStyle } from '../../css/outlineStyle';
import { debugTouchable } from '../private/touchable/debugTouchable';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

import { vars } from '../../themes/vars.css';

export const select = style([
  globalTextStyle({
    size: 'standard',
  }),
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
