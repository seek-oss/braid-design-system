import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconMoneySvg = function IconMoneySvg(_ref) {
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
    d: "M17 15.5c0-1.6-1.3-4.3-4.9-4.5-3-.2-3.1-2.5-3.1-2.5 0-.7.3-1.3.8-1.7.6-.5 1.4-.8 2.2-.8.8 0 1.6.3 2.2.8.4.4 1.1.3 1.4-.1.4-.4.3-1.1-.1-1.4-.7-.6-1.6-1-2.5-1.2V3c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-.9.2-1.7.5-2.5 1.2C7.6 6.1 7 7.2 7 8.5c0 1.6 1.3 4.3 4.9 4.5 3 .2 3.1 2.5 3.1 2.5 0 .7-.3 1.3-.8 1.7-.6.5-1.4.8-2.2.8-.8 0-1.6-.3-2.2-.8-.4-.4-1.1-.3-1.4.1-.4.4-.3 1.1.1 1.4.7.6 1.6 1 2.5 1.2V21c0 .6.4 1 1 1s1-.4 1-1v-1.1c.9-.2 1.7-.5 2.5-1.2.9-.8 1.5-1.9 1.5-3.2z"
  })));
};
IconMoneySvg.displayName = "IconMoneySvg";