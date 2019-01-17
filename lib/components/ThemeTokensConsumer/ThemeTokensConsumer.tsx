import React, { Component, ReactChild } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { Tokens } from '../../themes/theme';

export interface ThemeTokensConsumerProps {
  children(tokens: Tokens): ReactChild;
}

export default class ThemeTokensConsumer extends Component<
  ThemeTokensConsumerProps
> {
  static displayName = 'ThemeTokensConsumer';

  render() {
    return (
      <ThemeConsumer>
        {theme => this.props.children(theme.tokens)}
      </ThemeConsumer>
    );
  }
}
