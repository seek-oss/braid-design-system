import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, DropdownMenu, DropdownMenuItem } from '..';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <DropdownMenu label="Trigger label">
            <DropdownMenuItem onClick={handler}>First</DropdownMenuItem>
            <DropdownMenuItem onClick={handler}>Second</DropdownMenuItem>
            <DropdownMenuItem type="link">
              <Box
                component="a"
                href="https://seek-oss.github.io/braid-design-system/components/DropdownMenu"
                target="_blank"
              >
                Link to page
              </Box>
            </DropdownMenuItem>
          </DropdownMenu>
        </Box>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <DropdownMenu label="Trigger label">
          <DropdownMenuItem>Option</DropdownMenuItem>
          <DropdownMenuItem>Option</DropdownMenuItem>
        </DropdownMenu>
      ),
    },
  ],
};

export default docs;
