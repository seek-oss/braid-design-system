import { style } from '@vanilla-extract/css';

export const toast = style({
  pointerEvents: 'all',
});

export const collapsed = style({});

export const collapsedToastContent = style({
  selectors: {
    [`${collapsed} &`]: {
      opacity: 0,
    },
  },
});
