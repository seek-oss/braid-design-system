import { style } from 'sku/treat';

export const backdrop = style({
  background: 'rgba(0, 0, 0, .7)',
});

export const entrance = style({
  '@media': {
    'not screen and (prefers-reduced-motion)': {
      transform: 'scale(.8)',
    },
  },
});

export const dialogContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});
