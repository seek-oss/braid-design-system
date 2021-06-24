import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["tone"];
import React from 'react';
import { Badge as BraidBadge } from './Badge';
export var Badge = function Badge(_ref) {
  var tone = _ref.tone,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidBadge, _extends({
    tone: typeof tone !== 'boolean' ? tone : undefined
  }, restProps));
};
Badge.displayName = "Badge";