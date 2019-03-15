import React, { ReactNode } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

interface ThemeConsumerProps {
  children(theme: Theme): ReactNode;
}

const ThemeConsumer = ({ children }: ThemeConsumerProps) => (
  <ThemeContext.Consumer>
    {theme => {
      if (theme === null) {
        throw new Error('No theme passed');
      }

      return children(theme);
    }}
  </ThemeContext.Consumer>
);

ThemeConsumer.displayName = 'ThemeConsumer';

export default ThemeConsumer;
