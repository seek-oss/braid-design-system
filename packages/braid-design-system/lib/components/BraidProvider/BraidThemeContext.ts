import { createContext, useContext } from 'react';
import type { BraidTheme } from '../../themes/makeBraidTheme';

export const BraidThemeContext = createContext<BraidTheme | null>(null);

export const useBraidTheme = () => {
  const braidTheme = useContext(BraidThemeContext);

  if (braidTheme === null) {
    throw new Error('No Braid theme available on context');
  }

  return braidTheme;
};
