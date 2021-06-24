import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/atoms/textAlignedToIcon.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from './responsiveStyle';
import { vars } from '../themes/vars.css';

var calculateForBreakpoint = function calculateForBreakpoint(breakpoint) {
  var type = vars.textSize.standard[breakpoint];
  var padding = calc(type.lineHeight).subtract(type.capHeight).divide(2).toString();
  return {
    paddingTop: padding,
    paddingBottom: padding
  };
};

export var textAlignedToIcon = {
  standard: style(responsiveStyle({
    mobile: calculateForBreakpoint('mobile'),
    tablet: calculateForBreakpoint('tablet')
  }), "textAlignedToIcon_standard")
};

__vanilla_filescope__.endFileScope();