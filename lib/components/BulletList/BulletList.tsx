import React, { Component } from 'react';
import Box from '../Box/Box';

export default class BulletList extends Component {
  static displayName = 'BulletList';

  render() {
    return <Box component="ul" {...this.props} />;
  }
}
