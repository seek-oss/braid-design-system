import { style } from 'sku/treat';

export const toneKeyline = style({
  borderTopRightRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
});

export const root = style({});

export const content = style(({ grid }) => ({
  transform: `translateZ(0)`,
  selectors: {
    [`${root}:hover:not(:active) &`]: {
      transform: `translateY(-${Math.round(grid / 2)}px) translateZ(0)`,
    },
  },
}));

export const focusOverlay = style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${root}:hover:not(:active) &`]: {
      opacity: 0.5,
    },
  },
});
