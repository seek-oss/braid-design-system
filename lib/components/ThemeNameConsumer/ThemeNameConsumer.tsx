import { ReactElement } from 'react';
import { useThemeName } from './ThemeNameContext';

interface ThemeNameConsumerProps {
  children(name: string): ReactElement;
}

export const ThemeNameConsumer = ({ children }: ThemeNameConsumerProps) => {
  return children(useThemeName());
};
