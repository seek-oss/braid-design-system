import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../../../../lib/themes/themeVars.css';

export const activeUnderline = style({
  height: themeVars.borderWidth.large,
  background: themeVars.foregroundColor.neutral,
});

export const inactiveUnderlineCorrection = style({
  marginTop: calc.negate(themeVars.borderWidth.standard),
});

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});
