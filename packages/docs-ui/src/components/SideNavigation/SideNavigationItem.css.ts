import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const link = style({
  textDecoration: 'none',
  ':hover': {
    background: vars.backgroundColor.formAccentSoftHover,
  },
  ':active': {
    background: vars.backgroundColor.formAccentSoftActive,
  },
});
