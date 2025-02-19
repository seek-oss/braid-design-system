import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const verticalPadding = 'xxsmall';

export const inline = style({
  display: 'inline-flex',
  verticalAlign: 'middle',
  marginBottom: calc(vars.space[verticalPadding]).negate().toString(),
  marginTop: calc(vars.space[verticalPadding])
    .add('.2em') // subtle offset to improve alignment across all text sizes and themes
    .negate()
    .toString(),
});
