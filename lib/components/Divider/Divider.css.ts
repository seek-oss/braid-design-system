import { style } from '@mattsjones/css-core';
import { themeVars } from '../../themes/themeVars.css';

export const base = style({
  height: themeVars.border.width.standard,
});

export const weight = {
  regular: style({ background: themeVars.border.color.standard }),
  strong: style({ background: themeVars.color.foreground.neutral }),
};
