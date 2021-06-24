import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconTagSvg = function IconTagSvg(_ref) {
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
    d: "M7.4 6.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.1.1.1.2.2.3.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.1-.1-.2-.2-.3-.2z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M22.1 10.9l-8.6-8.6c-.2-.2-.4-.3-.7-.3h-8c-1.7 0-3 1.3-3 3v8c0 .3.1.5.3.7l8.6 8.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l7.1-7.1.1-.1c1.2-1.2 1.2-3.1 0-4.2zm-1.3 2.7s-.1.1 0 0l-7.3 7.3c-.4.4-1 .4-1.4 0l-8.3-8.3V5c0-.6.4-1 1-1h7.6l8.3 8.3c.4.4.4.9.1 1.3z"
  })));
};
IconTagSvg.displayName = "IconTagSvg";