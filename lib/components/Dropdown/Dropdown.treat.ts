import { style } from 'sku/treat';

export const chevron = style(({ utils, spacing }) => ({
  pointerEvents: 'none',
  top: 0,
  right: 0,
  alignItems: 'center',
  height: utils.rows(spacing.touchableRows),
}));

export const field = style(({ spacing, grid, typography }) => ({
  paddingRight:
    spacing.column.small * grid.column * 2 +
    typography.text.standard.mobile.size,
}));
