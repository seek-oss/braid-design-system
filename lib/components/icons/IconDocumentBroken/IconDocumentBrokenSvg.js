import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2, _path3;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconDocumentBrokenSvg = function IconDocumentBrokenSvg(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_jsx("title", {
    id: titleId
  }, void 0, title) : null, _path || (_path = /*#__PURE__*/_jsx("path", {
    fill: "none",
    d: "M15 5.414V7h1.586L15 5.414z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M19.707 7.293l-5-5A1 1 0 0014 2H7a3.003 3.003 0 00-3 3v14a3.003 3.003 0 003 3h5v-2H7a1 1 0 01-1-1V5a1 1 0 011-1h6v4a1 1 0 001 1h4v5h2V8a1 1 0 00-.293-.707zM15 7V5.414L16.586 7z"
  })), _path3 || (_path3 = /*#__PURE__*/_jsx("path", {
    d: "M19.707 16.293a1 1 0 00-1.414 0L17 17.586l-1.293-1.293a1 1 0 00-1.414 1.414L15.586 19l-1.293 1.293a1 1 0 101.414 1.414L17 20.414l1.293 1.293a1 1 0 001.414-1.414L18.414 19l1.293-1.293a1 1 0 000-1.414z"
  })));
};
IconDocumentBrokenSvg.displayName = "IconDocumentBrokenSvg";