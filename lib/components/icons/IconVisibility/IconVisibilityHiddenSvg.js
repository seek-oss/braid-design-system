import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconVisibilityHiddenSvg = function IconVisibilityHiddenSvg(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_jsx("title", {
    id: titleId
  }, void 0, title) : null, _path || (_path = /*#__PURE__*/_jsx("path", {
    d: "M5.571 14.015A11.133 11.133 0 014.123 12C4.827 10.728 7.292 7 12 7c.192 0 .374.015.558.027l1.768-1.767A10.41 10.41 0 0012 5c-6.867 0-9.791 6.32-9.912 6.59a1.001 1.001 0 000 .82 12.68 12.68 0 002.072 3.016zm16.341-2.425a12.842 12.842 0 00-3.64-4.448l2.435-2.435a1 1 0 00-1.414-1.414l-6.384 6.384-3.232 3.232-6.384 6.384a1 1 0 101.414 1.414l2.76-2.76A10.023 10.023 0 0012 19c6.867 0 9.791-6.32 9.912-6.59a1.001 1.001 0 000-.82zM12 17a8.097 8.097 0 01-3.008-.578l2.099-2.099a2.488 2.488 0 003.232-3.232l2.515-2.515A10.792 10.792 0 0119.877 12c-.704 1.272-3.169 5-7.877 5z"
  })));
};
IconVisibilityHiddenSvg.displayName = "IconVisibilityHiddenSvg";