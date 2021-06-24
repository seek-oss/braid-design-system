import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
export var useThemeName = function useThemeName() {
  return useBraidTheme().name;
};