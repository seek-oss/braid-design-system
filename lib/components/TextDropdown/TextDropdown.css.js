import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/TextDropdown/TextDropdown.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
import { virtualTouchableRules } from '../private/touchable/virtualTouchableRules';
export var select = style(_objectSpread({}, virtualTouchableRules), "select");
export var focusOverlay = [style({
  selectors: _defineProperty({}, "".concat(select, ":focus ~ &"), {
    opacity: 1
  })
}, "focusOverlay"), style({
  top: calc.negate(vars.space.xxsmall),
  bottom: calc.negate(vars.space.xxsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall)
}, "focusOverlay")];

__vanilla_filescope__.endFileScope();