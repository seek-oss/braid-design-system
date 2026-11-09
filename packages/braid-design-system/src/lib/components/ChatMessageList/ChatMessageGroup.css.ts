import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

/**
 * Tighter than the space scale, so user and participant bubbles can join.
 * Assistant messages use the `small` gap on Box instead: they have no padding.
 */
export const tight = style({
  gap: vars.grid,
});
