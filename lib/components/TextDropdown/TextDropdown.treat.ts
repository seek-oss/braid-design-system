import { style } from 'sku/treat';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';

export const select = style({
  opacity: 0,
  ...virtualTouchableRules,
});

export const focusOverlay = [
  style({
    selectors: {
      [`${select}:focus ~ &`]: {
        opacity: 1,
      },
    },
  }),
  style(({ space, grid }) => ({
    top: `-${grid * space.xxsmall}px`,
    bottom: `-${grid * space.xxsmall}px`,
    left: `-${grid * space.xxsmall}px`,
    right: `-${grid * space.xxsmall}px`,
  })),
];
