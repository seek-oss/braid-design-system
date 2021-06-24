import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconSocialFacebookSvg = function IconSocialFacebookSvg(_ref) {
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
    d: "M13.227 20v-7.288h2.46l.367-2.853h-2.827V8.042c0-.825.23-1.384 1.413-1.384h1.511V4.111A20.858 20.858 0 0013.958 4a3.424 3.424 0 00-3.656 3.759v2.099H7.85v2.853h2.453V20z"
  })));
};
IconSocialFacebookSvg.displayName = "IconSocialFacebookSvg";