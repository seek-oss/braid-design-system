import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, OverflowMenu, OverflowMenuItem } from '../';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu label="Options">
            <OverflowMenuItem onClick={handler}>First</OverflowMenuItem>
            <OverflowMenuItem onClick={handler}>Second</OverflowMenuItem>
            <OverflowMenuItem type="link">
              <Box
                component="a"
                href="https://seek-oss.github.io/braid-design-system/components/OverflowMenu"
                target="_blank"
              >
                Link to page
              </Box>
            </OverflowMenuItem>
          </OverflowMenu>
        </Box>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <OverflowMenu label="Options">
          <OverflowMenuItem>Option</OverflowMenuItem>
          <OverflowMenuItem>Option</OverflowMenuItem>
        </OverflowMenu>
      ),
    },
  ],
};

export default docs;
