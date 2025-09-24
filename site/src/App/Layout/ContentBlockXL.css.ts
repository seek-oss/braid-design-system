import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-src/lib/themes/vars.css';

export const container = style({
  maxWidth: calc.add(vars.contentWidth.large, '80px'),
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
});
