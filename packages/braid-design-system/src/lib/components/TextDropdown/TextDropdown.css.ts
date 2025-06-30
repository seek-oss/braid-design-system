import { style } from '@vanilla-extract/css';

import { debugTouchable } from '../private/touchable/debugTouchable';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

export const select = style([
  {
    ...virtualTouchableRules,
  },
  debugTouchable(),
]);
