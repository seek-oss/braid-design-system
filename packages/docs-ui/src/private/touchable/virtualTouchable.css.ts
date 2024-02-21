import { style } from '@vanilla-extract/css';

import { debugTouchable } from './debugTouchable';
import { virtualTouchableRules } from './virtualTouchableRules';

export const virtualTouchable = style([
  {
    position: 'relative',
    ':after': {
      content: '""',
      position: 'absolute',
      left: -10,
      right: -10,
      ...virtualTouchableRules,
    },
  },
  debugTouchable({ after: true }),
]);

export const yAxisOnly = style({
  ':after': {
    left: '0 !important',
    right: '0 !important',
  },
});
