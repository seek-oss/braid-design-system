import { style } from 'sku/treat';

export const outer = style(({ utils, grid, typography }) =>
  utils.responsiveStyles(
    { height: grid * typography.text.xsmall.mobile.rows },
    { height: grid * typography.text.xsmall.desktop.rows },
  ),
);

export const inner = style({
  overflow: 'hidden',
});
