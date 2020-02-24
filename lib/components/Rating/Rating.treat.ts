import { style } from 'sku/treat';

export const starColor = style(({ color }) => ({
  color: color.foreground.rating,
}));

export const starSpacing = style({
  paddingRight: '1px',
});

export const textSpacing = style({
  paddingLeft: '0.4em',
});
