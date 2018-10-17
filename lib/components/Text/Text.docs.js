import React from 'react';
import Text from './Text';

export default {
  component: Text,
  examples: [
    { label: 'Standard Text', render: () => <Text>Standard text.</Text> },
    {
      label: 'Large Text',
      render: () => <Text size="large">Large text.</Text>
    }
  ]
};
