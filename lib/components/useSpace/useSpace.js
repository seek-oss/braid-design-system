import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
export var useSpace = function useSpace() {
  return useBraidTheme().space;
};