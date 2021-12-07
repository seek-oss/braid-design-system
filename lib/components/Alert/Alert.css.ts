import { style } from '@vanilla-extract/css';

export const closeButton = style({});

export const closeButtonFocus = style({
  selectors: {
    [`${closeButton}:focus &`]: {
      opacity: 1,
    },
  },
});

export const closeButtonHover = style({
  selectors: {
    [`${closeButton}:focus &, ${closeButton}:hover &`]: {
      opacity: 1,
    },
  },
});
