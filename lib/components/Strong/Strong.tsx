import React, { ReactNode } from 'react';
import { useTheme } from '../private/ThemeContext';

export interface StrongProps {
  children: ReactNode;
}

export const Strong = ({ children }: StrongProps) => {
  const theme = useTheme();

  return <strong className={theme.atoms.fontWeight.strong}>{children}</strong>;
};
