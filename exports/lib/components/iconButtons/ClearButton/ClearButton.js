import React, { forwardRef } from 'react';
import { IconButton } from '../IconButton';
import { IconClear } from '../../icons';
export var ClearButton = /* #__PURE__*/ forwardRef(function (
  _ref,
  forwardedRef,
) {
  const label = _ref.label,
    onClick = _ref.onClick,
    onKeyUp = _ref.onKeyUp,
    onKeyDown = _ref.onKeyDown,
    onMouseDown = _ref.onMouseDown,
    keyboardAccessible = _ref.keyboardAccessible,
    active = _ref.active,
    ariaHasPopUp = _ref['aria-haspopup'],
    ariaExpanded = _ref['aria-expanded'],
    tone = _ref.tone,
    data = _ref.data;
  return /* #__PURE__*/ React.createElement(
    IconButton,
    {
      label,
      onClick,
      onKeyUp,
      onKeyDown,
      onMouseDown,
      keyboardAccessible,
      active,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
      tone,
      ref: forwardedRef,
      data,
    },
    function (iconProps) {
      return /* #__PURE__*/ React.createElement(IconClear, iconProps);
    },
  );
});
