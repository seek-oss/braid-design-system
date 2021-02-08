import { style } from 'sku/treat';

export const hover = style({});

export const current = style({
  opacity: 0.075,
});

export const background = style(() => ({
  selectors: {
    [`${hover}:hover &:not(${current})`]: {
      opacity: 0.5,
    },
  },
}));
