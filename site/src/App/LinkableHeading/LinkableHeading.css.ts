import { style } from '@mattsjones/css-core';

export const linkableHeading = style({});
export const hashLink = style({
  selectors: {
    [`${linkableHeading}:hover &`]: {
      opacity: 1,
    },
  },
});
