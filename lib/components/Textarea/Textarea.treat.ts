import { style } from 'sku/treat';

export const resetZIndex = style({
  zIndex: 0,
});

export const field = [
  style({
    resize: 'vertical',
    background: 'transparent',
    zIndex: 1,
  }),
  style(({ grid }) => ({
    minHeight: grid * 15,
  })),
];

export const highlights = style({
  color: 'transparent !important',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  selectors: {
    '&:after': {
      content: '"\\A"',
    },
  },
});
