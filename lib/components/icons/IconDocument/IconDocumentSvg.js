import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconDocumentSvg = function IconDocumentSvg(_ref) {
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
    d: "M19.5 6.7l-3.6-3.2-1.2-1.2c-.2-.2-.4-.3-.7-.3H5.8C4.8 2 4 3.1 4 4.5V20c-.1 1 .7 1.9 1.7 2H18c1 .1 1.9-.7 2-1.7V8c0-.5-.2-1-.5-1.3zM15 5.4L16.6 7H15V5.4zM7 20c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6v4c0 .6.4 1 1 1h4v10c0 .6-.4 1-1 1H7z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M14 11H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  })));
};
IconDocumentSvg.displayName = "IconDocumentSvg";