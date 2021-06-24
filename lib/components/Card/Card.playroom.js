import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["component"];
import React from 'react';
import { Card as BraidCard, validCardComponents } from './Card';
export var Card = function Card(_ref) {
  var component = _ref.component,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidCard, _extends({
    component: component && validCardComponents.indexOf(component) > -1 ? component : undefined
  }, restProps));
};
Card.displayName = "Card";