import React from 'react';
import Box from '../Box/Box';

export default class BulletList extends React.Component {
  static displayName = 'BulletList';

  render() {
    return (
      <Box
        component="ul"
        marginTop="none"
        marginBottom="none"
        paddingLeft="none"
        {...this.props}
      />
    );
  }
}
