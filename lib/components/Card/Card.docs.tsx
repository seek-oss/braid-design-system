import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Card } from './Card';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Card',
      render: () => (
        <Box
          paddingLeft="gutter"
          paddingRight="gutter"
          paddingTop="medium"
          style={{ backgroundColor: '#ccc' }}
        >
          <Card>
            <Text>This text is inside a card.</Text>
          </Card>
          <Card>
            <Text>This text is inside a card.</Text>
          </Card>
        </Box>
      ),
    },
  ],
};

export default docs;
