import React, { ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme}>
    <TreatProvider theme={theme.treatTheme}>{children}</TreatProvider>
  </ThemeContext.Provider>
);
