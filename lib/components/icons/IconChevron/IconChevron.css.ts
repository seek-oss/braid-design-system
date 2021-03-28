import { style } from '@vanilla-extract/css';

export const root = style({
  transition: 'transform 0.3s ease',
  transformOrigin: '50% 50%',
});

export const left = style({
  transform: 'rotate(90deg)',
});

export const up = style({
  transform: 'rotate(180deg)',
});

export const right = style({
  transform: 'rotate(270deg)',
});
