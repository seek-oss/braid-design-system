import { calc } from '@vanilla-extract/css-utils';
import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

export const field = style({
  resize: 'vertical',
  background: 'transparent',
  minHeight: calc.multiply(vars.grid, 15),
});

export const highlights = style({
  color: 'transparent !important',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  ':after': {
    content: '"\\A"',
  },
});
