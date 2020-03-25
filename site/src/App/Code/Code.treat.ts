import { style } from 'sku/treat';

export const code = style({
  background: '#010d19',
  overflowX: 'auto',
  borderBottomLeftRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
});

export const toolbar = style({
  borderTopLeftRadius: '0 !important',
  borderTopRightRadius: '0 !important',
});

export const button = style({
  outline: 'none',
});

export const activeOverlay = [
  style({
    selectors: {
      [`${button}:active &`]: {
        opacity: 1,
      },
    },
  }),
];

export const hoverOverlay = [
  style({
    selectors: {
      [`${button}:hover:not(:active) &`]: {
        opacity: 1,
      },
    },
  }),
];

export const focusOverlay = [
  style({
    selectors: {
      [`${button}:focus &`]: {
        opacity: 1,
      },
    },
  }),
];
