import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/private/touchable/virtualTouchable.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { style } from '@vanilla-extract/css';
import { debugTouchable } from './debugTouchable';
import { virtualTouchableRules } from './virtualTouchableRules';
export var virtualTouchable = style({
  position: 'relative',
  ':after': _objectSpread({
    content: '""',
    position: 'absolute',
    left: -10,
    right: -10
  }, virtualTouchableRules),
  selectors: _objectSpread({}, debugTouchable({
    after: true
  }))
}, "virtualTouchable");
export var yAxisOnly = style({
  ':after': {
    left: '0 !important',
    right: '0 !important'
  }
}, "yAxisOnly");

__vanilla_filescope__.endFileScope();