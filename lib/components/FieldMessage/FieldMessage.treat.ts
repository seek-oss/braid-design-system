import { style } from 'sku/treat';

export const grow = style({
  flexGrow: 1,
});

export const minHeight = style(({ utils, grid, typography }) => {
  const { mobile, desktop } = typography.text.small;

  return utils.responsiveStyles(
    { minHeight: grid * mobile.rows },
    { minHeight: grid * desktop.rows },
  );
});

export const fixedSize = style({
  flexShrink: 0,
  flexGrow: 0,
});
