import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconRefreshSvg = function IconRefreshSvg(_ref) {
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
    d: "M23.607 10.29a1 1 0 00-1.414 0l-.304.304A9.995 9.995 0 1012 22a1 1 0 000-2 8 8 0 117.86-9.457l-.253-.253a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 000-1.414z"
  })));
};
IconRefreshSvg.displayName = "IconRefreshSvg";