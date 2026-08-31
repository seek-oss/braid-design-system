import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const menuYPadding = createVar();

const widthVar = createVar();
const baseWidth = style({
  width: calc(widthVar).divide(4).toString(),
});

const { small, medium, large } = vars.contentWidth;
export const width = styleVariants({ small, medium, large }, (w) => [
  baseWidth,
  { vars: { [widthVar]: w } },
]);

export const menuHeightLimit = style({
  maxHeight: calc(vars.touchableSize)
    .multiply(9.5)
    .add(calc(menuYPadding).multiply(2))
    .toString(),
});
