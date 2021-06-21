import { style } from '@vanilla-extract/css';

export const hover = style({});

export const currentKeyline = style({
  opacity: 0.3,
});
export const current = style({
  opacity: 0.075,
});

export const background = style({
  selectors: {
    [`${hover}:hover &:not(${current})`]: {
      opacity: 0.5,
    },
  },
});
