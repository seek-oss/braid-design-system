import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Card, Text } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>
      ),
    },
  ],
};

export default docs;
