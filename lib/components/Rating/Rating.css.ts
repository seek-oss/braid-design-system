import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes/themeVars.css';

export const starColor = style({
  color: themeVars.color.foreground.rating,
});

export const starSpacing = style({
  paddingRight: '1px',
});

export const textSpacing = style({
  paddingLeft: '0.4em',
});
