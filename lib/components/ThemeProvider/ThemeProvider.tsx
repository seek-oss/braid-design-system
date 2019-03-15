import React, { ReactNode } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme, ...restProps }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme} {...restProps} />
);

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
