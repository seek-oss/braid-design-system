import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

export const starColor = style({
  color: vars.foregroundColor.rating,
});

export const starSpacing = style({
  paddingRight: '1px',
});

export const textSpacing = style({
  paddingLeft: '0.4em',
});
