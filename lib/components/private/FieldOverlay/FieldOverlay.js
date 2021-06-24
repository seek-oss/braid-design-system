import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["variant"];
import React from 'react';
import { Overlay } from '../Overlay/Overlay';
var boxShadowForVariant = {
  default: 'borderField',
  disabled: 'borderStandard',
  focus: 'outlineFocus',
  hover: 'borderFormHover',
  critical: 'borderCritical'
};
export var FieldOverlay = function FieldOverlay(_ref) {
  var variant = _ref.variant,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Overlay, _extends({
    borderRadius: "standard",
    boxShadow: boxShadowForVariant[variant],
    transition: "fast"
  }, restProps));
};
FieldOverlay.displayName = "FieldOverlay";