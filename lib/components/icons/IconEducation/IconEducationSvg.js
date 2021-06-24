import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconEducationSvg = function IconEducationSvg(_ref) {
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
    d: "M19 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM7 4h11v12H7c-.4 0-.7.1-1 .2V5c0-.6.4-1 1-1zm11 16H7c-.6 0-1-.4-1-1s.4-1 1-1h11v2z"
  })));
};
IconEducationSvg.displayName = "IconEducationSvg";