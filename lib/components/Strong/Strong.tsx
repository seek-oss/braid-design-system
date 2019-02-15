import React, { Component, ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface StrongProps {
  children: ReactNode;
}

export default class Strong extends Component<StrongProps> {
  static displayName = 'Strong';

  render() {
    const { children } = this.props;

    return (
      <ThemeConsumer>
        {theme => {
          return (
            <strong className={theme.atoms.fontWeight.strong}>
              {children}
            </strong>
          );
        }}
      </ThemeConsumer>
    );
  }
}
