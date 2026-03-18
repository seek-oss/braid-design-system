import { style } from '@vanilla-extract/css';
import { vars } from 'braid-src/lib/themes/vars.css';

export const searchItemActive = style({
  backgroundColor: vars.backgroundColor.formAccentSoftActive,
});

export const searchItem = style({
  borderRadius: vars.borderRadius.standard,
});
