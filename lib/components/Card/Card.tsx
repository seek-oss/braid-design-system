import React, { Component } from 'react';
import Box, { BoxProps } from '../Box/Box';

export type CardProps = BoxProps;

export default class Card extends Component<CardProps> {
  static displayName = 'Card';

  render() {
    return <Box backgroundColor="card" marginBottom="medium" {...this.props} />;
  }
}
