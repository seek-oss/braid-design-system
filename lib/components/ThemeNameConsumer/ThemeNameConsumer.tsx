import React, { Component, ReactNode } from 'react';
import ThemeContext from '../private/ThemeContext';

interface Props {
  children(name: string): ReactNode;
}

export default class ThemeNameConsumer extends Component<Props> {
  static displayName = 'ThemeNameConsumer';

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          if (theme === null) {
            throw new Error('No theme passed');
          }

          return this.props.children(theme.name);
        }}
      </ThemeContext.Consumer>
    );
  }
}
