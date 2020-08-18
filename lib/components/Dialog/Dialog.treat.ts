import { style } from 'sku/treat';

export const heading = style({
  selectors: {
    ':focus &': {
      opacity: 1,
    },
  },
});

export const dialogContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const dialog = style({
  maxHeight: '100%',
});
