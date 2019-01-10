import React, { Component } from 'react';
import Box, { BoxProps } from '../Box/Box';

export type BulletListProps = BoxProps;

export default class BulletList extends Component<BulletListProps> {
  static displayName = 'BulletList';

  render() {
    return <Box component="ul" {...this.props} />;
  }
}
