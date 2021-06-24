import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/OverflowMenu/OverflowMenu.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
var OVERFLOW_ICON_WIDTH = '4px';
var OVERFLOW_ICON_HEIGHT = '14px';
var circleSize = vars.textSize.standard.mobile.lineHeight;
var offsetX = calc(circleSize).subtract(OVERFLOW_ICON_WIDTH).divide(2).negate();
var offsetY = calc(circleSize).subtract(OVERFLOW_ICON_HEIGHT).divide(2).negate();
export var triggerOffset = style({
  margin: "".concat(offsetY, " ").concat(offsetX)
}, "triggerOffset");

__vanilla_filescope__.endFileScope();