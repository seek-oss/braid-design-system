import { style } from 'sku/treat';

export const grow = style({
  flexGrow: 1,
});

export const minHeight = style(theme => {
  const { responsiveStyles, rows } = theme.utils;
  const { mobile, desktop } = theme.typography.text.small;

  return responsiveStyles(
    { minHeight: rows(mobile.rows) },
    { minHeight: rows(desktop.rows) },
  );
});

export const fixedSize = style({
  flexShrink: 0,
  flexGrow: 0,
});
