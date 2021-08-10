import { style } from '@vanilla-extract/css';

export const root = style({
  transition: 'transform 0.3s ease',
  transformOrigin: '50% 50%',
});

export const down = style({
  transform: 'rotate(180deg)',
});
