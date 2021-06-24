import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { createPortal } from 'react-dom';
import { TextContext } from '../Text/TextContext';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
export var BraidPortal = function BraidPortal(_ref) {
  var children = _ref.children,
      container = _ref.container;

  var _useBraidTheme = useBraidTheme(),
      vanillaTheme = _useBraidTheme.vanillaTheme;

  return /*#__PURE__*/createPortal( /*#__PURE__*/_jsx(TextContext.Provider, {
    value: false
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: vanillaTheme
  }, void 0, children)), container !== null && container !== void 0 ? container : document.body);
};