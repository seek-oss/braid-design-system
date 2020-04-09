import { style } from 'sku/treat';
import { focusPaddingSize } from './comboboxShared';

export const root = style(({ space, grid }) => ({
  margin: `-${grid * space[focusPaddingSize]}px`,
}));

export const select = style({
  opacity: 0,
});

export const focusOverlay = style({
  selectors: {
    [`${select}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
