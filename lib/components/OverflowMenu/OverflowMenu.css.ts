import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

const OVERFLOW_ICON_WIDTH = '4px';
const OVERFLOW_ICON_HEIGHT = '14px';

const circleSize = vars.textSize.standard.mobile.lineHeight;
const offsetX = calc(circleSize)
  .subtract(OVERFLOW_ICON_WIDTH)
  .divide(2)
  .negate();
const offsetY = calc(circleSize)
  .subtract(OVERFLOW_ICON_HEIGHT)
  .divide(2)
  .negate();

export const triggerOffset = style({
  margin: `${offsetY} ${offsetX}`,
});
