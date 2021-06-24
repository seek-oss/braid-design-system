import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconProfileSvg = function IconProfileSvg(_ref) {
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
    d: "M12 12a5 5 0 115-5 5.006 5.006 0 01-5 5zm0-8a3 3 0 103 3 3.003 3.003 0 00-3-3zm6 18a1 1 0 01-1-1v-2a3.003 3.003 0 00-3-3h-4a3.003 3.003 0 00-3 3v2a1 1 0 01-2 0v-2a5.006 5.006 0 015-5h4a5.006 5.006 0 015 5v2a1 1 0 01-1 1z"
  })));
};
IconProfileSvg.displayName = "IconProfileSvg";