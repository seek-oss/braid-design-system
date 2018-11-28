import React, { Component } from 'react';
import Text, { Props as TextProps } from '../Text/Text';

export default class FieldLabel extends Component<TextProps> {
  static displayName = 'FieldLabel';

  render() {
    return <Text component="label" weight="strong" {...this.props} />;
  }
}
