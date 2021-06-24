import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Badge/Badge.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var constants = {
  textSize: 'xsmall'
};

var stylesForBreakpoint = function stylesForBreakpoint(breakpoint) {
  var _vars$textSize$consta = vars.textSize[constants.textSize][breakpoint],
      lineHeight = _vars$textSize$consta.lineHeight,
      capHeight = _vars$textSize$consta.capHeight;
  var padding = calc.subtract(lineHeight, capHeight);
  return {
    margin: "".concat(calc(padding).divide(2).negate(), " 0")
  };
};

export var bleedY = style(responsiveStyle({
  mobile: stylesForBreakpoint('mobile'),
  tablet: stylesForBreakpoint('tablet')
}), "bleedY");

__vanilla_filescope__.endFileScope();