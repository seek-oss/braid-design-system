import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Text } from '../';
import { HideCode } from '../private/HideCode';
import { ContentBlock } from './ContentBlock';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default Content Block',
      Example: () => (
        <ContentBlock>
          <HideCode>
            <Box padding="gutter" background="infoLight">
              <Text baseline={false}>Content Block</Text>
            </Box>
          </HideCode>
        </ContentBlock>
      ),
    },
    {
      label: 'Large Content Block',
      Example: () => (
        <ContentBlock width="large">
          <HideCode>
            <Box padding="gutter" background="infoLight">
              <Text baseline={false}>Content Block</Text>
            </Box>
          </HideCode>
        </ContentBlock>
      ),
    },
  ],
};

export default docs;
