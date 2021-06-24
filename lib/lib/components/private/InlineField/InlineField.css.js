import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/private/InlineField/InlineField.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../themes/vars.css';
import { hitArea } from '../touchable/hitArea';
import { debugTouchable } from '../touchable/debugTouchable';
var sizes = {
  standard: 'standard',
  small: 'small'
};
// Reset the z-index at the parent level to scope
// overrides internally.
export var root = style({
  ':hover': {
    zIndex: 1
  }
}, "root");
export var realField = style({
  width: hitArea,
  height: hitArea,
  selectors: _objectSpread({}, debugTouchable())
}, "realField");
export var realFieldPosition = styleVariants(sizes, function (size) {
  var offset = calc(hitArea).subtract(vars.inlineFieldSize[size]).divide(2).negate().toString();
  return {
    top: offset,
    left: offset
  };
}, "realFieldPosition");
export var fakeFieldBase = style({}, "fakeFieldBase");
export var fakeFieldSize = styleVariants(sizes, function (size) {
  return {
    height: vars.inlineFieldSize[size],
    width: vars.inlineFieldSize[size]
  };
}, "fakeFieldSize");
export var badgeOffset = styleVariants(sizes, function (size) {
  var offset = calc(vars.inlineFieldSize[size]).subtract(vars.textSize.xsmall.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: offset,
    paddingBottom: offset
  };
}, "badgeOffset");
export var labelBase = style({
  selectors: _defineProperty({}, "".concat(realField, ":not(:disabled) ~ * &"), {
    cursor: 'pointer'
  })
}, "labelBase");
export var labelOffset = styleVariants(sizes, function (size) {
  return {
    paddingTop: calc(vars.inlineFieldSize[size]).subtract(vars.textSize[size].mobile.capHeight).divide(2).toString()
  };
}, "labelOffset");
export var isMixed = style({}, "isMixed");
export var children = style({
  selectors: _defineProperty({}, "".concat(realField, ":checked ~ * &, ").concat(realField).concat(isMixed, " ~ * &"), {
    display: 'block'
  })
}, "children");
export var selected = style({
  selectors: _defineProperty({}, "".concat(realField, ":checked + ").concat(fakeFieldBase, " > &, ").concat(realField).concat(isMixed, " + ").concat(fakeFieldBase, " > &"), {
    opacity: 1
  })
}, "selected");
export var focusOverlay = style({
  selectors: _defineProperty({}, "".concat(realField, ":focus + ").concat(fakeFieldBase, " > &"), {
    opacity: 1
  })
}, "focusOverlay");
export var hoverOverlay = style({
  selectors: _defineProperty({}, "".concat(realField, ":hover:not(:checked):not(").concat(isMixed, "):not(:disabled) + ").concat(fakeFieldBase, " > &"), {
    opacity: 1
  })
}, "hoverOverlay");
export var indicator = style({
  selectors: _defineProperty({}, "".concat(hoverOverlay, " > &"), {
    opacity: 0.2
  })
}, "indicator");
var checkboxScale = style({
  transform: 'scale(0.85)',
  selectors: _defineProperty({}, "".concat(realField, ":active + ").concat(fakeFieldBase, " > * > &"), {
    transform: 'scale(0.75)'
  })
}, "checkboxScale");
export var checkboxIndicator = [indicator, checkboxScale];
var radioScale = style({
  transform: 'scale(0.6)',
  selectors: _defineProperty({}, "".concat(realField, ":active + ").concat(fakeFieldBase, " > * > &"), {
    transform: 'scale(0.5)'
  })
}, "radioScale");
export var radioIndicator = [indicator, radioScale];

__vanilla_filescope__.endFileScope();