import { style } from 'sku/treat';

export const button = style({});

export const focusRing = [
  style({
    selectors: {
      [`${button}:focus ~ &`]: {
        opacity: 1,
      },
    },
  }),
  style(({ grid, space }) => ({
    top: -space.xsmall * grid,
    bottom: -space.xsmall * grid,
    left: -space.xxsmall * grid,
    right: -space.xxsmall * grid,
  })),
];
