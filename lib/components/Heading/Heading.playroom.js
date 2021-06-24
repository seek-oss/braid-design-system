import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["level"];
import React from 'react';
import { Heading as BraidHeading } from './Heading';
export var Heading = function Heading(_ref) {
  var level = _ref.level,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidHeading, _extends({
    level: level || '3'
  }, restProps));
};
Heading.displayName = "Heading";