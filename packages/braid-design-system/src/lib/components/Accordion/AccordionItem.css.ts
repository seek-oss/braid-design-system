import { createVar, fallbackVar, style } from '@vanilla-extract/css';

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

export const animationDuration = createVar();
export const contentHeightVar = createVar();

const duration = fallbackVar(animationDuration, '200ms');

export const content = style({
  overflow: 'hidden',
  height: fallbackVar(contentHeightVar, '0px'),
  transition: `height ${duration} ease`,
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const contentHidden = style({
  visibility: 'hidden',
});

export const contentUnclipped = style({
  overflow: 'visible',
});
