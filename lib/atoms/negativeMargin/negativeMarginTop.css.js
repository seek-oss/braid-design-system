import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/atoms/negativeMargin/negativeMarginTop.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../responsiveStyle';
import { vars } from '../../themes/vars.css';

var negativeMarginTop = function negativeMarginTop(spaceValue) {
  return {
    ':before': {
      marginBottom: spaceValue ? calc.negate(spaceValue) : 0
    }
  };
};

export var base = style({
  ':before': {
    content: '""',
    display: 'table'
  }
}, "base");
export var mobile = styleVariants(_objectSpread({
  none: 0
}, vars.space), function (value) {
  return negativeMarginTop(value);
}, "mobile");
export var tablet = styleVariants(_objectSpread({
  none: 0
}, vars.space), function (value) {
  return responsiveStyle({
    tablet: negativeMarginTop(value)
  });
}, "tablet");
export var desktop = styleVariants(_objectSpread({
  none: 0
}, vars.space), function (value) {
  return responsiveStyle({
    desktop: negativeMarginTop(value)
  });
}, "desktop");

__vanilla_filescope__.endFileScope();