import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { debugTouchable } from '../private/touchable/debugTouchable';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

export const select = style([
  {
    ...virtualTouchableRules,
  },
  debugTouchable(),
]);

export const focusOverlay = atoms({
  borderRadius: 'standard',
});
