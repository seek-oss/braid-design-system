import { style } from '@vanilla-extract/css';

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
 * Apply a border offset on the right to ensure scroll bar appears
 * inside the visual border given we use boxShadow for borders.
 */
export const scrollbarBorderOffset = style({
  borderRight: `${vars.borderWidth.standard} solid transparent`,
});
