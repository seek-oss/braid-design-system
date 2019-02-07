import React, { Component, ReactNode } from 'react';
import Box from '../Box/Box';

export interface CardProps {
  children?: ReactNode;
}

export default class Card extends Component<CardProps> {
  static displayName = 'Card';

  render() {
    const { children } = this.props;

    return (
      <Box backgroundColor="card" marginBottom="medium">
        {children}
      </Box>
    );
  }
}
