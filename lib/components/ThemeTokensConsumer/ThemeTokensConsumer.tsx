import React, { ReactChild } from 'react';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';
import { Tokens } from '../../themes/theme';

interface ThemeTokensConsumerProps {
  children(tokens: Tokens): ReactChild;
}

export const ThemeTokensConsumer = ({ children }: ThemeTokensConsumerProps) => (
  <ThemeConsumer>{theme => children(theme.tokens)}</ThemeConsumer>
);
