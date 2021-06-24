import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["space", "align", "component"];
import React from 'react';
import { Stack as BraidStack, validStackComponents } from './Stack';
export var Stack = function Stack(_ref) {
  var space = _ref.space,
      align = _ref.align,
      component = _ref.component,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidStack, _extends({
    space: typeof space !== 'boolean' ? space : 'none',
    align: typeof align !== 'boolean' ? align : undefined,
    component: component && validStackComponents.indexOf(component) > -1 ? component : undefined
  }, restProps));
};
Stack.displayName = "Stack";