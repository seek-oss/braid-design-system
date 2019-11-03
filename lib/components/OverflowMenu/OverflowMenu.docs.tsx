import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { OverflowMenu } from './OverflowMenu';
import { OverflowMenuItem } from '../OverflowMenuItem/OverflowMenuItem';

const docs: ComponentDocs = {
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
};

export default docs;
