import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconInfoSvg = function IconInfoSvg(_ref) {
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
    d: "M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"
  })));
};
IconInfoSvg.displayName = "IconInfoSvg";