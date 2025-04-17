import { style } from '@vanilla-extract/css';

export const toast = style({
  pointerEvents: 'all',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none !important',
    },
  },
});

export const collapsed = style({});

export const collapsedToastContent = style({
  selectors: {
    [`${collapsed} &`]: {
      opacity: 0,
    },
  },
});
