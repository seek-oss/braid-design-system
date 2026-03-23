import { style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

import { virtualTouchable } from '../../private/virtualTouchable.css';

export const button = style([{}, virtualTouchable]);

export const focusRing = style([
  {
    outlineOffset: vars.space.xxsmall,
  },
  atoms({
    borderRadius: 'small',
  }),
]);
