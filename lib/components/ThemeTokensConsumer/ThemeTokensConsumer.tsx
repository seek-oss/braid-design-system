import React, { Component, ReactChild } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Tokens } from '../../themes/theme';

interface Props {
  children(tokens: Tokens): ReactChild;
}

export default class ThemeTokensConsumer extends Component<Props> {
  static displayName = 'ThemeTokensConsumer';

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          if (theme === null) {
            throw new Error('No theme passed');
          }

          return this.props.children(theme.tokens);
        }}
      </ThemeContext.Consumer>
    );
  }
}
