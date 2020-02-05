import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Secondary, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      Example: () => (
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>
      ),
    },
  ],
  snippets: [{ name: 'Standard', code: <Secondary>Secondary</Secondary> }],
};

export default docs;
