import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _circle, _circle2, _circle3;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconListSvg = function IconListSvg(_ref) {
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
    d: "M9 8h10c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm10 3H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zm0 5H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), _circle || (_circle = /*#__PURE__*/_jsx("circle", {
    cx: 5,
    cy: 7,
    r: 1
  })), _circle2 || (_circle2 = /*#__PURE__*/_jsx("circle", {
    cx: 5,
    cy: 12,
    r: 1
  })), _circle3 || (_circle3 = /*#__PURE__*/_jsx("circle", {
    cx: 5,
    cy: 17,
    r: 1
  })));
};
IconListSvg.displayName = "IconListSvg";