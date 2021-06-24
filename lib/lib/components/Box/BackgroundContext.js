import _jsx from "@babel/runtime/helpers/jsx";
import React, { createContext, useContext } from 'react';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
var backgroundContext = /*#__PURE__*/createContext('body');
export var BackgroundProvider = backgroundContext.Provider;
export var renderBackgroundProvider = function renderBackgroundProvider(background, element) {
  return background ? /*#__PURE__*/_jsx(BackgroundProvider, {
    value: background
  }, void 0, element) : element;
};
export var useBackground = function useBackground() {
  return useContext(backgroundContext);
};
export var useBackgroundLightness = function useBackgroundLightness(backgroundOverride) {
  var backgroundFromContext = useBackground();
  var background = backgroundOverride || backgroundFromContext;

  var _useBraidTheme = useBraidTheme(),
      backgroundLightness = _useBraidTheme.backgroundLightness;

  var defaultLightness = backgroundLightness.body;

  if (background === 'UNKNOWN_DARK') {
    return 'dark';
  }

  if (background === 'UNKNOWN_LIGHT') {
    return 'light';
  }

  return background ? backgroundLightness[background] || defaultLightness : defaultLightness;
};