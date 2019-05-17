import { style } from 'sku/treat';

export const root = style({
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const button = style({
  outline: 'none',
  textAlign: 'center',
});

export const overlayContainer = style({
  display: 'block',
  position: 'relative',
});

export const focusOverlay = style({
  selectors: {
    [`${root}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
