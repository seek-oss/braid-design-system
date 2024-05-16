import { style } from '@vanilla-extract/css';

import { debugTouchable } from './debugTouchable';
import { virtualTouchableRules } from './virtualTouchableRules';
import { atoms } from '../../../css/atoms/atoms';

export const virtualTouchable = style([
  atoms({ position: 'relative' }),
  {
    '::after': {
      content: '""',
      position: 'absolute',
      ...virtualTouchableRules,
    },
  },
  debugTouchable({ after: true }),
]);
