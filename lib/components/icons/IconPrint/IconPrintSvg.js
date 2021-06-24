import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconPrintSvg = function IconPrintSvg(_ref) {
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
    d: "M19 8h-1V3c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5H5c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3zM8 4h8v4H8V4zm9 16H7v-4h10v4zm3-5c0 .6-.4 1-1 1v-1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v4z"
  })));
};
IconPrintSvg.displayName = "IconPrintSvg";