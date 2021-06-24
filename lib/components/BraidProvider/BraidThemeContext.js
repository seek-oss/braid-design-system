import { createContext, useContext } from 'react';
export var BraidThemeContext = /*#__PURE__*/createContext(null);
export var useBraidTheme = function useBraidTheme() {
  var braidTheme = useContext(BraidThemeContext);

  if (braidTheme === null) {
    throw new Error('No Braid theme available on context');
  }

  return braidTheme;
};