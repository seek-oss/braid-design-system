import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box } from '../../Box/Box';
import { hideFocusRingsClassName } from '../hideFocusRings/hideFocusRings';
export var Overlay = function Overlay(_ref) {
  var component = _ref.component,
      zIndex = _ref.zIndex,
      background = _ref.background,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      transition = _ref.transition,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      _ref$onlyVisibleForKe = _ref.onlyVisibleForKeyboardNavigation,
      onlyVisibleForKeyboardNavigation = _ref$onlyVisibleForKe === void 0 ? false : _ref$onlyVisibleForKe,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_jsx(Box, {
    component: component,
    position: "absolute",
    zIndex: zIndex,
    pointerEvents: "none",
    background: background,
    borderRadius: borderRadius,
    boxShadow: boxShadow,
    transition: transition,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: !visible ? 0 : undefined,
    className: [onlyVisibleForKeyboardNavigation ? hideFocusRingsClassName : null, className]
  }, void 0, children);
};
Overlay.displayName = "Overlay";