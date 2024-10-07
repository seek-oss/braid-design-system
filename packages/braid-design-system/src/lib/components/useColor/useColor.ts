import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export const useColor = () => {
  const {
    foreground,
    // TODO: COLORMODE RELEASE
    // Release new backgrounds
    background: { surfaceDark: _, bodyDark: __, ...background },
  } = useBraidTheme().color;

  return {
    foreground,
    background,
  };
};
