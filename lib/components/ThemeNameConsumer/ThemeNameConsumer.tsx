import React, { Component, ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface ThemeNameConsumerProps {
  children(name: string): ReactNode;
}

export default class ThemeNameConsumer extends Component<
  ThemeNameConsumerProps
> {
  static displayName = 'ThemeNameConsumer';

  render() {
    return (
      <ThemeConsumer>{theme => this.props.children(theme.name)}</ThemeConsumer>
    );
  }
}
