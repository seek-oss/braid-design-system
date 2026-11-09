import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { outlineStyle } from '../../css/outlineStyle';

import { vars } from '../../themes/vars.css';

/**
 * How far the last message's actions bleed past the list.
 * Small icon buttons bleed by `xxsmall`.
 */
const messageEndSpace = vars.space.xxsmall;

/**
 * Wraps the scroll container and extends it by the list's end padding.
 * The negative margin pulls the following content back over that extension,
 * so the padding bleeds out instead of opening a gap under the conversation.
 */
export const frame = style({
  marginBottom: calc.negate(messageEndSpace),
  minHeight: 0,
  flexGrow: 1,
  height: '100%',
});

/**
 * End padding keeps the last message's actions inside the clip.
 * Cropped text and touch targets can extend past their boxes, and clipping
 * them here keeps that overflow from making the list scroll.
 */
export const messages = style({
  overflow: 'hidden',
  paddingBottom: messageEndSpace,
  ...outlineStyle('&:focus-visible'),
});
