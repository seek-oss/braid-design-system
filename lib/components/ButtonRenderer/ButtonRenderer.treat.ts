import { style } from 'sku/treat';

export const root = style({
  outline: 'none',
  textDecoration: 'none',
});

export const weak = style({
  backgroundColor: 'transparent',
});

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
  },
});

export const focusOverlay = style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1,
    },
  },
});

export const content = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',
});

export const loading = style({
  verticalAlign: 'top',
  textAlign: 'left',
});
export const ellipsis = style({
  width: 0,
  textAlign: 'left',
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
