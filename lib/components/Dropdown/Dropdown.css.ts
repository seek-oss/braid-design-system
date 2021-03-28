import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes/themeVars.css';

export const field = style({
  paddingRight: themeVars.touchableSize,
});
