import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Card } from './Card';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Card',
      Container: ({ children }) => (
        <Box
          paddingLeft="gutter"
          paddingRight="gutter"
          paddingTop="medium"
          style={{ backgroundColor: '#ccc' }}
        >
          {children}
        </Box>
      ),
      render: () => (
        <Fragment>
          <Card>
            <Text>This text is inside a card.</Text>
          </Card>
          <Card>
            <Text>This text is inside a card.</Text>
          </Card>
        </Fragment>
      ),
    },
  ],
};

export default docs;
