import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { BackgroundProvider } from './BackgroundProvider';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

const docs: ComponentDocs = {
  category: 'Logic',
  examples: [
    {
      label: 'Custom dark background',
      Example: () => (
        <Box padding="medium" style={{ backgroundColor: 'purple' }}>
          <BackgroundProvider type="dark">
            <Text>Should be white text</Text>
          </BackgroundProvider>
        </Box>
      ),
    },
    {
      label: 'Custom light background',
      Example: () => (
        <Box background="brand" padding="medium">
          <Box padding="medium" style={{ backgroundColor: 'snow' }}>
            <BackgroundProvider type="light">
              <Text>Should be black text</Text>
            </BackgroundProvider>
          </Box>
        </Box>
      ),
    },
  ],
};

export default docs;
