import React from 'react';
import Columns from '../Columns/Columns';
import Column from './Column';
import Box from '../Box/Box';
import Text from '../Text/Text';

export default {
  component: Columns,
  examples: [
    {
      label: 'Standard Columns',
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
