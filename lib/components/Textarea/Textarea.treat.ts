import { style } from 'sku/treat';

export const field = [
  style({
    resize: 'vertical',
    background: 'transparent',
  }),
  style(({ grid }) => ({
    minHeight: grid * 15,
  })),
];

export const highlights = style({
  color: 'transparent !important',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  ':after': {
    content: '"\\A"',
  },
});
