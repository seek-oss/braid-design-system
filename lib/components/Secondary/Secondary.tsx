import React, { ReactNode } from 'react';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';

export interface SecondaryProps {
  children: ReactNode;
}

export const Secondary = ({ children }: SecondaryProps) => (
  <ThemeConsumer>
    {({ atoms }) => <span className={atoms.color.secondary}>{children}</span>}
  </ThemeConsumer>
);
