import { style } from 'sku/treat';

export const field = [
  style({
    resize: 'vertical',
  }),
  style(({ grid }) => ({
    minHeight: grid * 15,
  })),
];
