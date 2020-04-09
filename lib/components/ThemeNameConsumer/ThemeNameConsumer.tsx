import { ReactElement } from 'react';
import { useThemeName } from '../useThemeName/useThemeName';

interface ThemeNameConsumerProps {
  children(name: string): ReactElement;
}

export const ThemeNameConsumer = ({ children }: ThemeNameConsumerProps) =>
  children(useThemeName());
