import { style } from 'sku/treat';

export const starColor = style(({ color }) => ({
  color: color.foreground.rating,
}));

export const spacing = style({
  paddingRight: '0.2em',
});
