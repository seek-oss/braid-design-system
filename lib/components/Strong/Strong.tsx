import React, { Component, ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { children } from '../Radio/Radio.css.js';

export interface StrongProps {
  children: ReactNode;
}

export default class Strong extends Component<StrongProps> {
  static displayName = 'Strong';

  render() {
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
