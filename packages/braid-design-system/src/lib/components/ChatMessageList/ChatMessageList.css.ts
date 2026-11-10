import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

/**
 * How far the last message's actions bleed past the list.
 * Small icon buttons bleed by `xxsmall`.
 */
export const messageEndSpace = 'xxsmall';

/**
 * Wraps the scroll container and extends it by the list's end padding.
 * The negative margin pulls the following content back over that extension,
 * so the padding bleeds out instead of opening a gap under the conversation.
 */
export const frame = style({
  marginBottom: calc.negate(vars.space[messageEndSpace]),
  minHeight: 0,
});

/**
 * The transition stays on this class. The hidden class only sets the
 * off-screen destination. Removing it returns to the initial transform,
 * so the entrance runs backwards on the way out.
 */
export const jumpToLatest = style({
  width: 'fit-content',
  transformOrigin: 'center',
  left: '50%',
  bottom: vars.space.xsmall,
  transform: 'translateX(-50%)',
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const jumpToLatestHidden = style({
  transform: `translate(-50%, ${vars.space.small}) scale(0.8)`,
});

/**
 * Stretch the log to the scrollport so a short conversation sits at the end.
 */
export const messages = style({
  minHeight: '100%',
});
