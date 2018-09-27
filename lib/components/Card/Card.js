import React from 'react';
import Box from '../Box/Box';

export default class Card extends React.Component {
  static displayName = 'Card';

  render() {
    return <Box backgroundColor="card" marginBottom="medium" {...this.props} />;
  }
}
