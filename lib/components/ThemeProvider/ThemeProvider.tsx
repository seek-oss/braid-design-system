import React, { ReactNode } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, ...restProps }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme} {...restProps} />
);
