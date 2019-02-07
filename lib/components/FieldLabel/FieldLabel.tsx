import React, { Component, ReactNode } from 'react';
import Text from '../Text/Text';

export interface FieldLabelProps {
  children?: ReactNode;
}

export default class FieldLabel extends Component<FieldLabelProps> {
  static displayName = 'FieldLabel';

  render() {
    const { children } = this.props;

    return (
      <Text component="label" weight="strong">
        {children}
      </Text>
    );
  }
}
