import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconDesktopSvg = function IconDesktopSvg(_ref) {
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
    d: "M19.2 2H4.8A2.908 2.908 0 002 5v10a2.908 2.908 0 002.8 3H11v2.005H8a1 1 0 000 2h8a1 1 0 000-2h-3V18h6.2a2.908 2.908 0 002.8-3V5a2.908 2.908 0 00-2.8-3zm.8 13a.93.93 0 01-.8 1H4.8a.93.93 0 01-.8-1V5a.93.93 0 01.8-1h14.4a.93.93 0 01.8 1z"
  })));
};
IconDesktopSvg.displayName = "IconDesktopSvg";