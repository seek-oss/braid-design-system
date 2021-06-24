import _jsx from "@babel/runtime/helpers/jsx";
import _typeof from "@babel/runtime/helpers/typeof";
import React, { useCallback } from 'react';
import { Box } from '../../Box/Box';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';
export var ClearField = function ClearField(_ref) {
  const _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      onClear = _ref.onClear,
      inputRef = _ref.inputRef;
  const clearHandler = useCallback(function (event) {
    if (typeof onClear !== 'function' || event.button !== 0) {
      return;
    }

    onClear();

    if (inputRef && _typeof(inputRef) === 'object' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onClear, inputRef]);
  return /* #__PURE__*/_jsx(Box, {
    height: "touchable",
    width: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "fast",
    pointerEvents: hide ? 'none' : undefined,
    opacity: hide ? 0 : undefined
  }, void 0, /* #__PURE__*/_jsx(ClearButton, {
    label: "Clear",
    onMouseDown: clearHandler,
    keyboardAccessible: false
  }));
};
ClearField.displayName = "ClearField";