import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, OverflowMenu, MenuItem } from '../';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>First</MenuItem>
            <MenuItem onClick={handler}>Second</MenuItem>
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
