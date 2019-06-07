import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text } from './Text';

const docs: ComponentDocs = {
  examples: [
    { label: 'Standard Text', render: () => <Text>Standard text.</Text> },
    {
      label: 'Small Text',
      render: () => <Text size="small">Small text.</Text>,
    },
    {
      label: 'Large Text',
      render: () => <Text size="large">Large text.</Text>,
    },
  ],
};

export default docs;
