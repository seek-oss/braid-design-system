import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Paragraph } from './Paragraph';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Paragraph',
      render: () => (
        <Paragraph>
          <Text>Standard</Text>
          <Text>Paragraph</Text>
        </Paragraph>
      ),
    },
  ],
};

export default docs;
