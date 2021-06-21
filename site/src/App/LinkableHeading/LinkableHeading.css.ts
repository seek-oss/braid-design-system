import { style } from '@vanilla-extract/css';

export const linkableHeading = style({});
export const hashLink = style({
  selectors: {
    [`${linkableHeading}:hover &`]: {
      opacity: 1,
    },
  },
});
