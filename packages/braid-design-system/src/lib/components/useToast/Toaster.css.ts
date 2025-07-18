import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const toaster = style({
  justifySelf: 'center',
  bottom: vars.space.xsmall,
});
