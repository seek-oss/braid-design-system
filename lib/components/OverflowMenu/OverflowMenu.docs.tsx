import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      background: 'card',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink href="#" onClick={handler}>
              Link
            </MenuItemLink>
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
          <MenuItem>Option</MenuItem>
          <MenuItem>Option</MenuItem>
        </OverflowMenu>
      ),
    },
  ],
};

export default docs;
