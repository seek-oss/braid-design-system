import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns } from './Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <Column>
            <HideCode>
              <Box
                background="selection"
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
                background="selection"
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
                background="selection"
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
