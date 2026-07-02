import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});
export const loading = style({
  animation: `${spin} 0.7s linear infinite`,
});
