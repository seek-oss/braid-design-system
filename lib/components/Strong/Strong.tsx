import React, { ReactNode } from 'react';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';

export interface StrongProps {
  children: ReactNode;
}

export const Strong = ({ children }: StrongProps) => (
  <ThemeConsumer>
    {theme => {
      return (
        <strong className={theme.atoms.fontWeight.strong}>{children}</strong>
      );
    }}
  </ThemeConsumer>
);
