import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export const useThemeName = () => useBraidTheme().name;
