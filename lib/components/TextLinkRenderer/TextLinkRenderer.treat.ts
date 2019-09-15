import { style } from 'sku/treat';

export const root = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const button = style({
  outline: 'none',
  textAlign: 'center',
});

export const focusOverlay = style({
  selectors: {
    [`${root}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
