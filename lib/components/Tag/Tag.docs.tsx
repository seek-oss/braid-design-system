import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tag } from './Tag';
import { Inline } from '../Inline/Inline';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Tag',
      Example: () => <Tag>Tag</Tag>,
    },
    {
      label: 'Clearable Tag',
      Example: ({ handler }) => <Tag onClear={handler}>Tag</Tag>,
    },
    {
      label: 'Multiline Tag',
      docsSite: true,
      Example: ({ handler }) => (
        <Tag onClear={handler}>
          Multiline tag
          <br />
          Multiline tag
        </Tag>
      ),
    },
    {
      label: 'Test: Standard and clearable tags should be equal height',
      docsSite: true,
      Example: ({ handler }) => (
        <Inline space="small">
          <Tag>Tag</Tag>
          <Tag onClear={handler}>Tag</Tag>
        </Inline>
      ),
    },
  ],
};

export default docs;
