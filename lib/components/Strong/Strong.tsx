import React, { ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => (
  <ThemeConsumer>
    {theme => {
      return (
        <strong className={theme.atoms.fontWeight.strong}>{children}</strong>
      );
    }}
  </ThemeConsumer>
);

Strong.displayName = 'Strong';

export default Strong;
