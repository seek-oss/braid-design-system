import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const menuIsClosed = style({
  transform: `translateY(${calc(vars.grid).negate().multiply(2)})`,
  visibility: 'hidden',
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

export const placementBottom = style({
  bottom: '100%',
});
