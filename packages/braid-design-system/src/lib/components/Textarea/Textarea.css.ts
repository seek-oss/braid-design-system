import { style } from '@vanilla-extract/css';

import { fieldPaddingX } from '../private/Field/fieldPaddingX';

import { vars } from '../../themes/vars.css';

export const field = style({
  resize: 'vertical',
  background: 'transparent',
  minHeight: vars.touchableSize,
});

export const highlights = style({
  color: 'transparent !important',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  ':after': {
    content: '"\\A"',
  },
});

/**
 * Clip the highlights overlay from the right by the width of the
 * horizontal field padding. Ensure its scroll bar is not visible
 * beneath the textarea scroll bar in Firefox & Safari.
 */
export const clipScrollBar = style({
  clipPath: `inset(0 ${vars.space[fieldPaddingX]} 0 0)`,
});

/**
 * Apply a border offset on the right to ensure scroll bar appears
 * inside the visual border given we use boxShadow for borders.
 */
export const scrollbarBorderOffset = style({
  borderRight: `${vars.borderWidth.standard} solid transparent`,
});
