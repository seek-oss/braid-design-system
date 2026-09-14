import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export const button = style([{}, virtualTouchable]);

export const focusRing = style([
  {
    outlineOffset: vars.space.xxsmall,
  },
  atoms({
    borderRadius: 'small',
  }),
]);

export const content = style({
  overflow: 'hidden',
  transition: 'height 200ms ease',
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const contentOpen = style({
  height: 'auto',
  transition: 'none',
});

export const contentClosed = style({
  height: 0,
});

export const contentHidden = style({
  visibility: 'hidden',
});

export const contentUnclipped = style({
  overflow: 'visible',
});
