import React, { ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import ThemeNameContext from '../ThemeNameConsumer/ThemeNameContext';
import { Theme } from '../../themes/theme';

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <ThemeNameContext.Provider value={theme.name}>
    <TreatProvider theme={theme.treatTheme}>{children}</TreatProvider>
  </ThemeNameContext.Provider>
);
