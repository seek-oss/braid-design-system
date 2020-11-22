import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Secondary, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      Example: () => (
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>
      ),
    },
  ],
};

export default docs;
