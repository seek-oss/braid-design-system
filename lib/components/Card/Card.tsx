import React, { Component } from 'react';
import Box from '../Box/Box';

export default class Card extends Component {
  static displayName = 'Card';

  render() {
    return <Box backgroundColor="card" marginBottom="medium" {...this.props} />;
  }
}
