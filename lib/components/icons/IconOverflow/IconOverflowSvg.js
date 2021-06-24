import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _circle, _circle2, _circle3;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconOverflowSvg = function IconOverflowSvg(_ref) {
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
  }, void 0, title) : null, _circle || (_circle = /*#__PURE__*/_jsx("circle", {
    cx: 12,
    cy: 4,
    r: 2
  })), _circle2 || (_circle2 = /*#__PURE__*/_jsx("circle", {
    cx: 12,
    cy: 20,
    r: 2
  })), _circle3 || (_circle3 = /*#__PURE__*/_jsx("circle", {
    cx: 12,
    cy: 12,
    r: 2
  })));
};
IconOverflowSvg.displayName = "IconOverflowSvg";