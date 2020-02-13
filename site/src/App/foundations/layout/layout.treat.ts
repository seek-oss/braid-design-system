import { style } from 'sku/treat';

export const hashAnchor = style({
  marginTop: -40,
});

export const linkableHeading = style({});
export const hashLink = style({
  opacity: 0,
  selectors: {
    [`${linkableHeading}:hover &`]: {
      opacity: 1,
    },
  },
});
