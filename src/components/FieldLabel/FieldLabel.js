import React from 'react';
import Text from '../Text/Text';

const FieldLabel = props => (
  <Text component="label" weight="strong" {...props} />
);

FieldLabel.displayName = 'FieldLabel';

export default FieldLabel;
