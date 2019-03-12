import React from 'react';
import Secondary from './Secondary';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

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
