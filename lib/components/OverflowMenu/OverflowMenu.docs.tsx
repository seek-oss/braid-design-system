import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { OverflowMenu, MenuItem } from './OverflowMenu';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default (right aligned menu)',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu>
            <MenuItem onClick={handler}>First</MenuItem>
            <MenuItem onClick={handler}>Second</MenuItem>
            <MenuItem onClick={handler}>Third</MenuItem>
          </OverflowMenu>
        </Box>
      ),
    },
    {
      label: 'Left aligned menu',
      Example: ({ handler }) => (
        <OverflowMenu align="left">
          <MenuItem onClick={handler}>First</MenuItem>
          <MenuItem onClick={handler}>Second</MenuItem>
          <MenuItem onClick={handler}>Third</MenuItem>
        </OverflowMenu>
      ),
    },
  ],
};

export default docs;
