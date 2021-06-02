import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../../../lib/themes/vars.css';

export const activeUnderline = style({
  height: vars.borderWidth.large,
  background: vars.foregroundColor.neutral,
});

export const inactiveUnderlineCorrection = style({
  marginTop: calc.negate(vars.borderWidth.standard),
});

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});
