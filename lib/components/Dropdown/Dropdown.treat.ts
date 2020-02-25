import { style } from 'sku/treat';

export const field = style(({ space, grid, typography }) => ({
  paddingRight: space.small * grid * 2 + typography.text.standard.mobile.size,
}));
