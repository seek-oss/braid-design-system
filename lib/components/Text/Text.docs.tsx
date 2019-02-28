import React from 'react';
import Text from './Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    { label: 'Standard Text', render: () => <Text>Standard text.</Text> },
    {
      label: 'Large Text',
      render: () => <Text size="large">Large text.</Text>,
    },
  ],
};

export default docs;
