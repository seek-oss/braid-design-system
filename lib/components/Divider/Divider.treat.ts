import { style, styleMap } from 'sku/treat';

export const base = style(theme => ({
  height: theme.border.width.standard,
}));

export const weight = styleMap(theme => ({
  standard: { background: theme.border.color.standard },
  strong: { background: theme.color.foreground.neutral },
}));
