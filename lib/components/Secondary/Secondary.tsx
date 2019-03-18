import React, { ReactNode } from 'react';
import { useTheme } from '../private/ThemeContext';

export interface SecondaryProps {
  children: ReactNode;
}

export const Secondary = ({ children }: SecondaryProps) => {
  const { atoms } = useTheme();

  return <span className={atoms.color.secondary}>{children}</span>;
};
