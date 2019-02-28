import React from 'react';
import Columns from './Columns';
import Column from '../Column/Column';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { HideCode } from '../private/HideCode';

export default {
  component: Columns,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <Column>
            <HideCode>
              <Box
                backgroundColor="selection"
                paddingTop="small"
                paddingBottom="small"
                paddingLeft="small"
              >
                <Text baseline={false}>Column</Text>
              </Box>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Box
                backgroundColor="selection"
                paddingTop="small"
                paddingBottom="small"
                paddingLeft="small"
              >
                <Text baseline={false}>Column</Text>
              </Box>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Box
                backgroundColor="selection"
                paddingTop="small"
                paddingBottom="small"
                paddingLeft="small"
              >
                <Text baseline={false}>Column</Text>
              </Box>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
  ],
};
