import { ReactElement } from 'react';
import { useTheme } from '../private/ThemeContext';

interface ThemeNameConsumerProps {
  children(name: string): ReactElement;
}

export const ThemeNameConsumer = ({ children }: ThemeNameConsumerProps) => {
  const theme = useTheme();

  return children(theme.name);
};

export const useThemeName = () => useTheme().name;
