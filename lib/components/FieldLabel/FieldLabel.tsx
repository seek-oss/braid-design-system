import React, { Component } from 'react';
import Text, { TextProps } from '../Text/Text';

export type FieldLabelProps = TextProps;

export default class FieldLabel extends Component<FieldLabelProps> {
  static displayName = 'FieldLabel';

  render() {
    return <Text component="label" weight="strong" {...this.props} />;
  }
}
