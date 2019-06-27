import React, { ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import ThemeNameContext from '../ThemeNameConsumer/ThemeNameContext';
import { Theme } from '../../themes/theme';

export interface BraidProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const BraidProvider = ({ theme, children }: BraidProviderProps) => (
  <ThemeNameContext.Provider value={theme.name}>
    <TreatProvider theme={theme.treatTheme}>{children}</TreatProvider>
  </ThemeNameContext.Provider>
);
