import React, { Component, ReactNode } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

export interface ThemeConsumerProps {
  children(theme: Theme): ReactNode;
}

export default class ThemeConsumer extends Component<ThemeConsumerProps> {
  static displayName = 'ThemeConsumer';

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          if (theme === null) {
            throw new Error('No theme passed');
          }

          return this.props.children(theme);
        }}
      </ThemeContext.Consumer>
    );
  }
}
