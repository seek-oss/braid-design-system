import React, { Component, ReactNode } from 'react';
import Box from '../Box/Box';

export interface BulletListProps {
  children?: ReactNode;
}

export default class BulletList extends Component<BulletListProps> {
  static displayName = 'BulletList';

  render() {
    const { children } = this.props;

    return <Box component="ul">{children}</Box>;
  }
}
