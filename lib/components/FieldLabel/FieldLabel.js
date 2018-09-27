import React from 'react';
import Text from '../Text/Text';

export default class FieldLabel extends React.Component {
  static displayName = 'FieldLabel';

  render() {
    return <Text component="label" weight="strong" {...this.props} />;
  }
}
