import React from 'react';
import Card from './Card';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Card',
      render: () => (
        <Box
          paddingLeft="small"
          paddingRight="small"
          paddingTop="small"
          paddingBottom="small"
          style={{ backgroundColor: '#ccc' }}
        >
          <Card
            paddingLeft="gutter"
            paddingRight="gutter"
            paddingTop="small"
            paddingBottom="large"
          >
            <Text>This text is inside a card.</Text>
          </Card>
          <Card
            paddingLeft="gutter"
            paddingRight="gutter"
            paddingTop="small"
            paddingBottom="large"
            marginBottom="none"
          >
            <Text>This text is inside a card.</Text>
          </Card>
        </Box>
      )
    }
  ]
};

export default docs;
