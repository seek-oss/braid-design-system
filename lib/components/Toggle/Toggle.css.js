import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _selectors3;

import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Toggle/Toggle.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
import { hitArea } from '../private/touchable/hitArea';
import { debugTouchable } from '../private/touchable/debugTouchable';
var sizes = {
  standard: 'standard',
  small: 'small'
};
var toggleWidthRatio = 1.6; // Reset the z-index at the parent level to scope
// overrides internally.

export var root = style({
  ':hover': {
    zIndex: 1
  }
}, "root");
export var realField = style({
  height: hitArea,
  selectors: _objectSpread({}, debugTouchable())
}, "realField");
export var realFieldPosition = styleVariants(sizes, function (size) {
  return {
    top: calc(hitArea).subtract(vars.inlineFieldSize[size]).divide(2).negate().toString()
  };
}, "realFieldPosition");
export var label = styleVariants(sizes, function (size) {
  var padding = calc(vars.inlineFieldSize[size]).subtract(vars.textSize.standard.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: padding,
    paddingBottom: padding
  };
}, "label");
export var fieldSize = styleVariants(sizes, function (size) {
  return {
    width: calc.multiply(vars.inlineFieldSize[size], toggleWidthRatio)
  };
}, "fieldSize");
export var slideContainerBase = style({}, "slideContainerBase");
export var slideContainerSize = styleVariants(sizes, function (size) {
  return {
    height: vars.inlineFieldSize[size]
  };
}, "slideContainerSize");
export var slideTrack = styleVariants(sizes, function (size) {
  return {
    height: calc.subtract(vars.inlineFieldSize[size], vars.grid)
  };
}, "slideTrack");
export var slideTrackBackground = style({
  backgroundColor: vars.borderColor.standard,
  // Fix for Safari border-radius, overflow hidden, transform bug:
  // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  WebkitMaskImage: '-webkit-radial-gradient(white, black)'
}, "slideTrackBackground");
export var slideTrackSelected = style({
  selectors: _defineProperty({}, "".concat(realField, ":not(:checked) + ").concat(slideContainerBase, " &"), {
    transform: "translateX(".concat(calc.negate(vars.touchableSize), ")")
  })
}, "slideTrackSelected");
export var slider = styleVariants(sizes, function (size) {
  var _selectors2;

  var slideDistance = calc(vars.inlineFieldSize[size]).multiply(toggleWidthRatio).subtract(vars.inlineFieldSize[size]).toString();
  var anticipationRatio = 0.12;
  var anticipation = calc.multiply(vars.inlineFieldSize[size], anticipationRatio);
  return {
    height: vars.inlineFieldSize[size],
    width: vars.inlineFieldSize[size],
    selectors: (_selectors2 = {}, _defineProperty(_selectors2, "".concat(realField, ":active + ").concat(slideContainerBase, " &"), {
      transform: "translateX(".concat(calc.negate(anticipation), ")")
    }), _defineProperty(_selectors2, "".concat(realField, ":checked + ").concat(slideContainerBase, " &"), {
      transform: "translateX(".concat(slideDistance, ")")
    }), _defineProperty(_selectors2, "".concat(realField, ":active:checked + ").concat(slideContainerBase, " &"), {
      transform: "translateX(".concat(calc.add(slideDistance, anticipation), ")")
    }), _selectors2)
  };
}, "slider");
export var icon = style({
  transform: 'scale(.75)',
  selectors: (_selectors3 = {}, _defineProperty(_selectors3, "".concat(realField, ":active + ").concat(slideContainerBase, " &"), {
    transform: 'scale(.75) rotate(-25deg)'
  }), _defineProperty(_selectors3, "".concat(realField, ":checked + ").concat(slideContainerBase, " &"), {
    opacity: 1
  }), _defineProperty(_selectors3, "".concat(realField, ":active:checked + ").concat(slideContainerBase, " &"), {
    transform: 'scale(.75) rotate(6deg)'
  }), _selectors3)
}, "icon");
export var focusOverlay = style({
  selectors: _defineProperty({}, "".concat(realField, ":focus + ").concat(slideContainerBase, " &, ").concat(realField, ":active + ").concat(slideContainerBase, " &"), {
    opacity: 1
  })
}, "focusOverlay");
export var hoverOverlay = style({
  selectors: _defineProperty({}, "".concat(realField, ":hover:not(:disabled) + ").concat(slideContainerBase, " &"), {
    opacity: 1
  })
}, "hoverOverlay");

__vanilla_filescope__.endFileScope();