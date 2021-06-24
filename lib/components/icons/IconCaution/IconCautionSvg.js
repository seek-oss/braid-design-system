import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _circle, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconCautionSvg = function IconCautionSvg(_ref) {
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
    d: "M22.71 17.262L14.738 3.71A3.183 3.183 0 0012 2.013 3.183 3.183 0 009.262 3.71L1.29 17.262a3.152 3.152 0 00-.14 3.225A3.152 3.152 0 004 22h16a3.023 3.023 0 002.71-4.738zM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0112 4.013a1.232 1.232 0 011.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20z"
  })), _circle || (_circle = /*#__PURE__*/_jsx("circle", {
    cx: 12,
    cy: 17,
    r: 1
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M11.978 14a1 1 0 001-1V9a1 1 0 00-2 0v4a1 1 0 001 1z"
  })));
};
IconCautionSvg.displayName = "IconCautionSvg";