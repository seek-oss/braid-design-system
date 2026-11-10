import { style } from '@vanilla-extract/css';

export const root = style({
  transition: 'transform 0.3s ease',
  transformOrigin: '50% 50%',
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const left = style({
  transform: 'rotate(90deg)',
});

export const up = style({
  transform: 'rotate(180deg)',
});

// -90deg faces the same way as 270deg. Interpolating to down (0deg) is then
// 90deg clockwise instead of 270deg the long way.
export const right = style({
  transform: 'rotate(-90deg)',
});
