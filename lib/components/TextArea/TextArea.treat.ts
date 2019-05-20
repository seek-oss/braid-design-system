import { style } from 'sku/treat';

export const field = style(({ rowHeight }) => ({
  resize: 'vertical',
  minHeight: rowHeight * 15,
}));
