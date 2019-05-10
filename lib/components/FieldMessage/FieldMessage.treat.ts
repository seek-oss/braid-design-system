import { style } from 'sku/treat';

export const root = style(
  {
    justifyContent: 'flex-end',
  },
  'root',
);

export const grow = style(
  {
    flexGrow: 1,
  },
  'grow',
);

export const minHeight = style(theme => {
  const { responsiveStyles, rows } = theme.utils;
  const { mobile, desktop } = theme.text.standard;

  return responsiveStyles(
    { minHeight: rows(mobile.rows) },
    { minHeight: rows(desktop.rows) },
  );
}, 'minHeight');

export const fixedSize = style(
  {
    flexShrink: 0,
    flexGrow: 0,
  },
  'fixedSize',
);
