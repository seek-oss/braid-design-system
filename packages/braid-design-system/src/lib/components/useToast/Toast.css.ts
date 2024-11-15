import { style } from '@vanilla-extract/css';

export const toast = style({
  pointerEvents: 'all',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none !important',
    },
  },
});
