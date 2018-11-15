import React from 'react';
import Text from '../Text/Text';

export default class Bullet extends React.Component {
  static displayName = 'Bullet';

  render() {
    return (
      <Text
        component="li"
        paddingBottom="xsmall"
        style={{ marginLeft: '1.3em' }}
        {...this.props}
      />
    );
  }
}
