import React from 'react';
import Columns from './Columns';
import Box from '../Box/Box';
import Text from '../Text/Text';

export default {
  component: Columns,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <Box
            backgroundColor="selection"
            paddingTop="small"
            paddingBottom="small"
            paddingLeft="small"
          >
            <Text baseline={false}>Column</Text>
          </Box>
          <Box
            backgroundColor="selection"
            paddingTop="small"
            paddingBottom="small"
            paddingLeft="small"
          >
            <Text baseline={false}>Column</Text>
          </Box>
          <Box
            backgroundColor="selection"
            paddingTop="small"
            paddingBottom="small"
            paddingLeft="small"
          >
            <Text baseline={false}>Column</Text>
          </Box>
        </Columns>
      )
    }
  ]
};
