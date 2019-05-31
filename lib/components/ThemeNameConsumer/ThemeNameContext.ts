import { createContext, useContext } from 'react';

const themeNameContext = createContext<string | null>(null);

export const useThemeName = () => {
  const themeName = useContext(themeNameContext);

  if (themeName === null) {
    throw new Error('No theme name passed');
  }

  return themeName;
};

export default themeNameContext;
