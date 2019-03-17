import React, { ReactNode } from 'react';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';

interface ThemeNameConsumerProps {
  children(name: string): ReactNode;
}

export const ThemeNameConsumer = ({ children }: ThemeNameConsumerProps) => (
  <ThemeConsumer>{theme => children(theme.name)}</ThemeConsumer>
);
