import { style } from 'sku/treat';

export const field = style(({ utils: { rows } }) => ({
  resize: 'vertical',
  minHeight: rows(15),
}));
