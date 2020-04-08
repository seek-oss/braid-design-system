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

export const loading = style({
  verticalAlign: 'top',
});
export const ellipsis = style({
  width: 0,
  overflowX: 'hidden',
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  '@keyframes': {
    to: {
      width: 20,
    },
  },
});
export const visibilityHidden = style({
  visibility: 'hidden',
});
