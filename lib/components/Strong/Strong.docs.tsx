import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Strong, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      Example: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
};

export default docs;
