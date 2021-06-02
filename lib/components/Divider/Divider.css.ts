import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes/themeVars.css';

export const base = style({
  height: themeVars.borderWidth.standard,
});

export const weight = {
  regular: style({ background: themeVars.borderColor.standard }),
  strong: style({ background: themeVars.foregroundColor.neutral }),
};
