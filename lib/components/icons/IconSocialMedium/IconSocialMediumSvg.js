import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconSocialMediumSvg = function IconSocialMediumSvg(_ref) {
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
    d: "M21 21H3V3h18zM7.295 14.365a.615.615 0 01-.163.53l-1.27 1.54v.204h3.601v-.203l-1.27-1.54a.638.638 0 01-.175-.531V9.742l3.161 6.897h.367l2.716-6.897v5.497c0 .147 0 .175-.096.271l-.977.948v.204h4.742v-.204l-.943-.925a.282.282 0 01-.107-.271v-6.8a.282.282 0 01.107-.272l.966-.925v-.203h-3.342l-2.383 5.942-2.71-5.942H6.015v.203l1.129 1.36a.468.468 0 01.152.395z"
  })));
};
IconSocialMediumSvg.displayName = "IconSocialMediumSvg";