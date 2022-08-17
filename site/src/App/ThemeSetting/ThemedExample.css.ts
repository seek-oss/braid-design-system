import { style } from '@vanilla-extract/css';
import tokens from 'braid-design-system/lib/themes/docs/tokens';

export const unthemedBorderRadius = style({
  borderRadius: tokens.border.radius.large,
});
