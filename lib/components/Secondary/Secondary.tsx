import React, { Component, ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface SecondaryProps {
  children: ReactNode;
}

export default class Secondary extends Component<SecondaryProps> {
  static displayName = 'Secondary';

  render() {
    const { children } = this.props;

    return (
      <ThemeConsumer>
        {({ atoms }) => (
          <span className={atoms.color.secondary}>{children}</span>
        )}
      </ThemeConsumer>
    );
  }
}
