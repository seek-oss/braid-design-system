import * as React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Strong, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      Example: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <Strong>Strong text</Strong>,
    },
  ],
};

export default docs;
