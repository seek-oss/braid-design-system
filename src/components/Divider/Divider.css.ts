import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

export const base = style({
  height: vars.borderWidth.standard,
});

export const weight = {
  regular: style({ background: vars.borderColor.standard }),
  strong: style({ background: vars.foregroundColor.neutral }),
};
