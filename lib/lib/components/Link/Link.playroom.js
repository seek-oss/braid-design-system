import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["href", "onClick"];
import React, { forwardRef } from 'react';
import { Link as CustomLink } from './Link';
export var Link = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CustomLink, _extends({
    ref: ref,
    href: href !== null && href !== void 0 ? href : '',
    onClick: onClick ? onClick : function (event) {
      return event === null || event === void 0 ? void 0 : event.preventDefault();
    }
  }, restProps));
});