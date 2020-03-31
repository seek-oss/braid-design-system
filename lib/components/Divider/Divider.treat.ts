import { style, styleMap } from 'sku/treat';

export const base = style({ height: 1 });

export const weight = styleMap(theme => ({
  standard: { background: theme.border.color.standard },
  strong: { background: theme.color.foreground.neutral },
}));
