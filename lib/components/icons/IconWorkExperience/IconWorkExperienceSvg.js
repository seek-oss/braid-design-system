import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconWorkExperienceSvg = function IconWorkExperienceSvg(_ref) {
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
    d: "M20 6h-3V5a3.003 3.003 0 00-3-3h-4a3.003 3.003 0 00-3 3v1H4a3.003 3.003 0 00-3 3v10a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V9a3.003 3.003 0 00-3-3zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm6 3v12H9V8zM3 19V9a1 1 0 011-1h3v12H4a1 1 0 01-1-1zm18 0a1 1 0 01-1 1h-3V8h3a1 1 0 011 1z"
  })));
};
IconWorkExperienceSvg.displayName = "IconWorkExperienceSvg";