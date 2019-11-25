import { style } from 'sku/treat';

export const underlineAlways = style({
  textDecoration: 'underline',
});

export const underlineOnHoverOnly = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const button = style({
  outline: 'none',
});

export const focusOverlay = style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
