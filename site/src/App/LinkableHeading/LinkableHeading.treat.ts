import { style } from 'sku/treat';

export const linkableHeading = style({});
export const hashLink = style({
  selectors: {
    [`${linkableHeading}:hover &`]: {
      opacity: 1,
    },
  },
});
