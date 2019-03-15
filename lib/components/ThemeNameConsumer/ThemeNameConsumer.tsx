import React, { ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

interface ThemeNameConsumerProps {
  children(name: string): ReactNode;
}

const ThemeNameConsumer = ({ children }: ThemeNameConsumerProps) => (
  <ThemeConsumer>{theme => children(theme.name)}</ThemeConsumer>
);

ThemeNameConsumer.displayName = 'ThemeNameConsumer';

export default ThemeNameConsumer;
