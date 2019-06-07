import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Secondary } from './Secondary';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      render: () => (
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>
      ),
    },
  ],
};

export default docs;
