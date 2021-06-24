import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconHomeSvg = function IconHomeSvg(_ref) {
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
    d: "M20.7 9.2l-8-7c-.4-.3-.9-.3-1.3 0l-8 7c-.3.2-.4.5-.4.8v11c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V10c0-.3-.1-.6-.3-.8zM19 20h-5v-4c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v4H5v-9.5l7-6.1 7 6.1V20z"
  })));
};
IconHomeSvg.displayName = "IconHomeSvg";