import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "component", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import clsx from 'clsx';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms } from '../../atoms/atoms';
export var BoxRenderer = function BoxRenderer(_ref) {
  var children = _ref.children,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var atomicClasses = atoms(_objectSpread({
    reset: component
  }, props));
  var element = children(clsx(className, atomicClasses));
  return renderBackgroundProvider(props.background, element);
};