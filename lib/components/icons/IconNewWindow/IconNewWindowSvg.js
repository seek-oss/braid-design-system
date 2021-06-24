import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconNewWindowSvg = function IconNewWindowSvg(_ref) {
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
    d: "M19 11c-.6 0-1 .4-1 1v5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c.6 0 1-.4 1-1s-.4-1-1-1H7C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-5c0-.6-.4-1-1-1z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M21 3v-.4l-.1-.1c0-.1-.1-.1-.1-.2 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1h-4.3c-.6 0-1 .4-1 1s.4 1 1 1H18l-6.5 7.3c-.4.4-.3 1 .1 1.4.2.2.4.3.7.3.3 0 .6-.1.7-.3l6.3-7V7c0 .6.4 1 1 1s1-.4 1-1L21 3z"
  })));
};
IconNewWindowSvg.displayName = "IconNewWindowSvg";