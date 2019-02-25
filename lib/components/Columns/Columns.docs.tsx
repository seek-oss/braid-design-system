import React from 'react';
import Columns from './Columns';
import Column from '../Column/Column';
import Box from '../Box/Box';
import Text from '../Text/Text';

export default {
  component: Columns,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <Column>
            <Box
              backgroundColor="selection"
              paddingTop="small"
              paddingBottom="small"
              paddingLeft="small"
            >
              <Text baseline={false}>Column</Text>
            </Box>
          </Column>
          <Column>
            <Box
              backgroundColor="selection"
              paddingTop="small"
              paddingBottom="small"
              paddingLeft="small"
            >
              <Text baseline={false}>Column</Text>
            </Box>
          </Column>
          <Column>
            <Box
              backgroundColor="selection"
              paddingTop="small"
              paddingBottom="small"
              paddingLeft="small"
            >
              <Text baseline={false}>Column</Text>
            </Box>
          </Column>
        </Columns>
      )
    }
  ]
};
