import { style } from 'sku/treat';

export const chevron = style({
  top: 0,
  right: 0,
});

export const field = style(({ space, grid, typography }) => ({
  paddingRight: space.small * grid * 2 + typography.text.standard.mobile.size,
}));
