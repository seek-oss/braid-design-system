import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconInvoiceSvg = function IconInvoiceSvg(_ref) {
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
    d: "M20 2H4c-.6 0-1 .4-1 1v18c0 .3.2.7.5.9.3.2.7.2 1 0l1.5-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c-.2.1-.1.1.1.1s.4 0 .5-.1c.3-.2.5-.5.5-.9V3c0-.6-.4-1-1-1zm-1 17.4l-.6-.3c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.1-.1-.2-.1-.4-.1s-.3 0-.4.1l-1.6.8-1.6-.8c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.3-.1-.6-.1-.9 0l-.5.3V4h14v15.4z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M8 12h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm0-4h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm8 6h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  })));
};
IconInvoiceSvg.displayName = "IconInvoiceSvg";