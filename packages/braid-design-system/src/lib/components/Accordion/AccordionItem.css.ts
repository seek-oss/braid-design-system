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

export {
  content,
  contentInner,
  contentOpen,
} from '../private/collapsibleHeight.css';

export const contentClosed = style({
  visibility: 'hidden',
  height: 0,
});
