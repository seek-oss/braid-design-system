import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tag } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Tag',
      background: 'card',
      Example: () => <Tag>Tag</Tag>,
    },
    {
      label: 'Clearable Tag',
      background: 'card',
      Example: ({ handler }) => (
        <Tag onClear={handler} clearLabel="Clear tag">
          Tag
        </Tag>
      ),
    },
  ],
};

export default docs;
