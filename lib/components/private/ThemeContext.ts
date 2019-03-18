import { createContext, useContext } from 'react';
import { Theme } from './../../themes/theme';

const themeContext = createContext<Theme | null>(null);

export const useTheme = () => {
  const theme = useContext(themeContext);

  if (theme === null) {
    throw new Error('No theme passed');
  }

  return theme;
};

export default themeContext;
