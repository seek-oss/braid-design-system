import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { responsiveStyle } from '../atoms/responsiveStyle';
export var mapToProperty = function mapToProperty(property, breakpoint) {
  return function (value) {
    const styleRule = _defineProperty({}, property, value);

    return breakpoint ? responsiveStyle(_defineProperty({}, breakpoint, styleRule)) : styleRule;
  };
};