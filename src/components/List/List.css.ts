import { style } from '@vanilla-extract/css';

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

const dotWidth = 0.4;
export const minCharacterWidth = [
  style({ minWidth: `${1 + dotWidth}ch` }),
  style({ minWidth: `${2 + dotWidth}ch` }),
];
export const trimGutter = style({
  marginRight: `${-dotWidth}ch`,
});
