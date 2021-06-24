import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconPersonAddSvg = function IconPersonAddSvg(_ref) {
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
    d: "M9 12a5 5 0 10-5-5 5.006 5.006 0 005 5zm0-8a3 3 0 11-3 3 3.003 3.003 0 013-3zm12 7h-2V9a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2zm-10 3H7a5.006 5.006 0 00-5 5v2a1 1 0 002 0v-2a3.003 3.003 0 013-3h4a3.003 3.003 0 013 3v2a1 1 0 002 0v-2a5.006 5.006 0 00-5-5z"
  })));
};
IconPersonAddSvg.displayName = "IconPersonAddSvg";