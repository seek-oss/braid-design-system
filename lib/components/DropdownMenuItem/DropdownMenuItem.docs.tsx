import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <DropdownMenu label="Options">
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
};

export default docs;
