import { style } from '@vanilla-extract/css';
import tokens from '../../../../lib/themes/docs/tokens';

export const unthemedBorderRadius = style({
  borderRadius: tokens.border.radius.large,
});
