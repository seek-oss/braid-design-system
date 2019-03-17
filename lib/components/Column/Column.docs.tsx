import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Columns } from '../Columns/Columns';
import { Column } from './Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Columns',
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

export default docs;
