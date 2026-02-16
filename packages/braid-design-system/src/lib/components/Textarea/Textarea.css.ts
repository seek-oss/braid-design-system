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
