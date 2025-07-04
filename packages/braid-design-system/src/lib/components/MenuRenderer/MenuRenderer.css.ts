import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const menuYPadding = createVar();

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const triggerVars = {
  top: createVar(),
  left: createVar(),
  bottom: createVar(),
  right: createVar(),
};

// Top and bottom reversed to allow for a more natural API
export const menuPosition = style({
  top: triggerVars.bottom,
  bottom: triggerVars.top,
  left: triggerVars.left,
  right: triggerVars.right,
});

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
