import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Card } from './Card';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container: ({ children }) => (
        <Box padding="gutter" style={{ backgroundColor: '#ccc' }}>
          {children}
        </Box>
      ),
      Example: () => (
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>
      ),
    },
  ],
};

export default docs;
