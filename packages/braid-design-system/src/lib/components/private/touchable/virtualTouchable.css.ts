import { style } from '@vanilla-extract/css';

import { debugTouchable } from './debugTouchable';
import { virtualTouchableRules } from './virtualTouchableRules';

export const virtualTouchable = style([
  {
    position: 'relative',
    '::after': {
      content: '""',
      position: 'absolute',
      ...virtualTouchableRules,
    },
  },
  debugTouchable({ after: true }),
]);
