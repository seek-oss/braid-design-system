import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
export var useColor = function useColor() {
  return useBraidTheme().color;
};