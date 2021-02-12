import { style } from 'sku/treat';

export const toneKeyline = style({
  borderTopRightRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
});

export const clickable = style(({ grid }) => ({
  transform: `translateZ(0)`,
  ':hover': {
    transform: `translateY(-${grid / 2}px) translateZ(0)`,
  },
}));

export const hover = style({
  selectors: {
    [`${clickable}:hover &`]: {
      opacity: 0.5,
    },
  },
});
