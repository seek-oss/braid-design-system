import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconBookmarkActiveSvg = function IconBookmarkActiveSvg(_ref) {
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
    d: "M19 5.1c.1-1.6-1.1-2.9-2.7-3.1H7.6C6.1 2.1 4.9 3.5 5 5v16c0 .4.2.7.5.9.3.2.7.2 1 0l5.4-3.6 5.4 3.6c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9l.1-16z"
  })));
};
IconBookmarkActiveSvg.displayName = "IconBookmarkActiveSvg";