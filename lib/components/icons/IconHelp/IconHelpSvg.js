import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconHelpSvg = function IconHelpSvg(_ref) {
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
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M12.7 16.3c-.4-.4-1.1-.4-1.4 0-.1.1-.2.2-.2.3 0 .1-.1.2-.1.4 0 .3.1.5.3.7.2.2.4.3.7.3s.5-.1.7-.3c.1-.1.2-.2.2-.3 0-.1.1-.2.1-.4s0-.3-.1-.4c0-.1-.1-.2-.2-.3zm.6-10.1c-2-.7-4.3.4-5.1 2.5-.2.5.1 1 .6 1.2.5.2 1.1-.1 1.3-.6.4-1 1.5-1.6 2.6-1.2.8.3 1.3 1 1.3 1.9 0 .5-.3.7-1.3 1.2-.7.3-1.7.8-1.7 1.8 0 .6.4 1 1 1 .5 0 .9-.3 1-.7.1-.1.4-.2.6-.3.9-.4 2.5-1.2 2.5-3-.1-1.7-1.2-3.2-2.8-3.8z"
  })));
};
IconHelpSvg.displayName = "IconHelpSvg";