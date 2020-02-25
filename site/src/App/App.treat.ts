import { style } from 'sku/treat';

const transitionSpeed = '0.15s';

export const enter = style({
  opacity: 0,
});

export const enterActive = style({
  opacity: 1,
  transition: `opacity ${transitionSpeed}`,
  transitionDelay: transitionSpeed,
});

export const exit = style({
  opacity: 1,
});

export const exitActive = style({
  opacity: 0,
  transition: `opacity ${transitionSpeed}`,
});
