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
      <Box paddingBottom="medium">
        <Box
          backgroundColor="card"
          paddingTop="small"
          paddingBottom="large"
          paddingLeft="gutter"
          paddingRight="gutter"
        >
          {children}
        </Box>
      </Box>
    );
  }
}
