import React, { forwardRef } from 'react';
import { IconButton } from '../IconButton';
import { IconOverflow } from '../../icons';
export var OverflowButton = /*#__PURE__*/forwardRef(function (_ref, forwardedRef) {
  var label = _ref.label,
      onClick = _ref.onClick,
      onKeyUp = _ref.onKeyUp,
      onKeyDown = _ref.onKeyDown,
      onMouseDown = _ref.onMouseDown,
      keyboardAccessible = _ref.keyboardAccessible,
      active = _ref.active,
      ariaHasPopUp = _ref['aria-haspopup'],
      ariaExpanded = _ref['aria-expanded'];
  return /*#__PURE__*/React.createElement(IconButton, {
    label: label,
    onClick: onClick,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    keyboardAccessible: keyboardAccessible,
    active: active,
    "aria-haspopup": ariaHasPopUp,
    "aria-expanded": ariaExpanded,
    ref: forwardedRef
  }, function (iconProps) {
    return /*#__PURE__*/React.createElement(IconOverflow, iconProps);
  });
});