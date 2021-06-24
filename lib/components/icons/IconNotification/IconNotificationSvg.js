import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconNotificationSvg = function IconNotificationSvg(_ref) {
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
    d: "M20 16v-6a8.018 8.018 0 00-5.45-7.577 2.996 2.996 0 00-5.1 0A8.018 8.018 0 004 10v6a1 1 0 000 2h16a1 1 0 000-2zM6 16v-6a6.008 6.008 0 014.411-5.78 1.001 1.001 0 00.663-.591.996.996 0 011.852 0 1.001 1.001 0 00.663.592A6.008 6.008 0 0118 10v6zm6 6a2.991 2.991 0 002.816-2H9.184A2.991 2.991 0 0012 22z"
  })));
};
IconNotificationSvg.displayName = "IconNotificationSvg";