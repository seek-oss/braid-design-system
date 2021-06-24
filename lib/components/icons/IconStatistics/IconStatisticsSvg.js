import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path, _path2;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconStatisticsSvg = function IconStatisticsSvg(_ref) {
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
    d: "M20 20H4a1 1 0 010-2h16a1 1 0 010 2zM4 16a1 1 0 01-.707-1.707l5-5a1 1 0 011.414 0L12 11.586l7.293-7.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0L9 11.414l-4.293 4.293A.997.997 0 014 16z"
  })), _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
    d: "M20 20H4a1 1 0 010-2h16a1 1 0 010 2zM4 16a1 1 0 01-.707-1.707l5-5a1 1 0 011.414 0L12 11.586l7.293-7.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0L9 11.414l-4.293 4.293A.997.997 0 014 16z"
  })));
};
IconStatisticsSvg.displayName = "IconStatisticsSvg";