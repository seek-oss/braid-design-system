import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconHeartSvg = function IconHeartSvg(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_jsx("title", {
    id: titleId
  }, void 0, title) : null, _path || (_path = /*#__PURE__*/_jsx("path", {
    d: "M15.7 4c-.1 0-.1 0 0 0-1.4 0-2.7.5-3.7 1.3C11 4.5 9.7 4 8.4 4 5.5 4 3 6.3 3 9.3c0 4 5 8.9 8.6 10.6.1.1.3.1.4.1s.3 0 .4-.1C16 18.2 21 13.3 21 9.3c0-3-2.4-5.3-5.3-5.3zM12 17.9c-3-1.6-7-5.7-7-8.6C5 7.5 6.5 6 8.4 6h.1c1.1 0 2.1.5 2.8 1.4.4.5 1.2.5 1.6 0 .6-.9 1.6-1.4 2.7-1.4C17.5 6 19 7.5 19 9.3c0 2.9-4 7-7 8.6z"
  })));
};
IconHeartSvg.displayName = "IconHeartSvg";