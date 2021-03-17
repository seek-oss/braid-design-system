import { multiply } from '@mattsjones/css-utils';
import { style } from '@mattsjones/css-core';
import { themeVars } from '../../themes/themeVars.css';

export const field = style({
  resize: 'vertical',
  background: 'transparent',
  minHeight: multiply(themeVars.grid, 15),
});

export const highlights = style({
  color: 'transparent !important',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  ':after': {
    content: '"\\A"',
  },
});
