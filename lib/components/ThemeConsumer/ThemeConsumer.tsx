import { ReactNode } from 'react';
import { Theme } from '../../themes/theme';
import { useTheme } from '../private/ThemeContext';

interface ThemeConsumerProps {
  children(theme: Theme): ReactNode;
}

export const ThemeConsumer = ({ children }: ThemeConsumerProps) => {
  const theme = useTheme();

  return children(theme);
};
