import { style } from 'sku/treat';

export const root = style({
  textDecoration: 'none',
});

export const weak = style({
  backgroundColor: 'transparent',
});

export const inverted = style({});

export const activeOverlay = style({
  selectors: {
    [`${root}:active &`]: {
      opacity: 1,
    },
    [`${weak}:active &`]: {
      opacity: 0.1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${root}:hover:not(:active) &`]: {
      opacity: 1,
    },
    [`${weak}:hover:not(:active) &`]: {
      opacity: 0.075,
    },
    [`${weak}${inverted}:hover:not(:active) &`]: {
      opacity: 0.15,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1,
    },
  },
});

export const loadingDot = style({
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  opacity: 0,
  selectors: {
    [`&:nth-child(1)`]: {
      '@keyframes': {
        '24%': {
          opacity: 0,
        },
        '25%,100%': {
          opacity: 1,
        },
      },
    },
    [`&:nth-child(2)`]: {
      '@keyframes': {
        '49%': {
          opacity: 0,
        },
        '50%,100%': {
          opacity: 1,
        },
      },
    },
    [`&:nth-child(3)`]: {
      '@keyframes': {
        '74%': {
          opacity: 0,
        },
        '75%,100%': {
          opacity: 1,
        },
      },
    },
  },
});
