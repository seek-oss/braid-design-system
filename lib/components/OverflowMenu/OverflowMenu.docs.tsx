import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { OverflowMenu, MenuItem, Card, Inline } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Card>
          <Inline space="small" align="right">
            <OverflowMenu label="Options">
              <MenuItem onClick={handler}>First</MenuItem>
              <MenuItem onClick={handler}>Second</MenuItem>
            </OverflowMenu>
          </Inline>
        </Card>
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
