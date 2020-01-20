import { style } from 'sku/treat';

export const size = style({
  height: '1em',
});

export const inline = style({
  verticalAlign: 'middle',
  top: '-0.105em', // Arbitrary magic number, to vertically align to text
});
