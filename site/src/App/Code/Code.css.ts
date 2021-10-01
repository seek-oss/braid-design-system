import { style } from '@vanilla-extract/css';

export const code = style({
  overflowX: 'auto',
});

export const button = style({});

export const activeOverlay = [
  style({
    selectors: {
      [`${button}:active &`]: {
        opacity: 1,
      },
    },
  }),
];

export const hoverOverlay = [
  style({
    selectors: {
      [`${button}:hover:not(:active) &`]: {
        opacity: 1,
      },
    },
  }),
];

export const focusOverlay = [
  style({
    selectors: {
      [`${button}:focus &`]: {
        opacity: 1,
      },
    },
  }),
];
