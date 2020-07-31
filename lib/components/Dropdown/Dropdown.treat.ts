import { style } from 'sku/treat';

export const field = style(({ grid, touchableSize }) => ({
  paddingRight: touchableSize * grid,
}));
