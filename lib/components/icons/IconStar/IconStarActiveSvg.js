import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconStarActiveSvg = function IconStarActiveSvg(_ref) {
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
    d: "M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.5-.9-.7-1.4-.4-.2.1-.3.2-.4.4L8.2 7.3l-6.3 1c-.6.1-1 .6-.9 1.1 0 .2.1.4.3.6l4.6 4.5-1.1 6.4c-.1.5.3 1.1.8 1.2.2 0 .4 0 .6-.1l5.7-3 5.7 3c.5.3 1.1.1 1.3-.4.1-.2.1-.4.1-.6l-1.1-6.4 4.6-4.5c.5-.4.6-.8.5-1.1z"
  })));
};
IconStarActiveSvg.displayName = "IconStarActiveSvg";