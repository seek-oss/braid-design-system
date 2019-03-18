import { ReactElement } from 'react';
import { Tokens } from '../../themes/theme';
import { useTheme } from '../private/ThemeContext';

interface ThemeTokensConsumerProps {
  children(tokens: Tokens): ReactElement;
}

export const ThemeTokensConsumer = ({ children }: ThemeTokensConsumerProps) => {
  const { tokens } = useTheme();

  return children(tokens);
};

export const useThemeTokens = () => useTheme().tokens;
