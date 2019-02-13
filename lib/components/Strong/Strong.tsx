import React, { Component } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export default class Strong extends Component<{}> {
  static displayName = 'Strong';

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          return <strong className={theme.atoms.fontWeight.strong} />;
        }}
      </ThemeConsumer>
    );
  }
}
