import { style } from 'sku/treat';

export const currentColor = style({
  background: 'currentColor',
});

const large = style({ width: 5, height: 5 });
const standard = style({ width: 4, height: 4 });
const xsmall = style({ width: 3, height: 3 });
export const size = {
  large,
  standard,
  small: standard,
  xsmall,
};
