import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconNoteSvg = function IconNoteSvg(_ref) {
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
    d: "M13 11H8c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H8c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M20.9 8.6c-.1-.1-.1-.2-.2-.3l-5-5c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM16 6.4L17.6 8H16V6.4zM18 19H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h8v4c0 .6.4 1 1 1h4v8c0 .6-.4 1-1 1z"
  })));
};
IconNoteSvg.displayName = "IconNoteSvg";