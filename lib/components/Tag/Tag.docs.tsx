import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tag, Inline } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
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
    {
      label: 'Truncated Tag',
      docsSite: false,
      background: 'card',
      Example: ({ handler }) => (
        <Tag onClear={handler} clearLabel="Clear tag">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </Tag>
      ),
    },
    {
      label: 'Test: Standard and clearable tags should be equal height',
      docsSite: false,
      background: 'card',
      Example: ({ handler }) => (
        <Inline space="small">
          <Tag>Tag</Tag>
          <Tag onClear={handler} clearLabel="Clear tag">
            Tag
          </Tag>
        </Inline>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <Inline space="small">
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </Inline>
      ),
    },
    {
      name: 'Dismissable',
      code: (
        <Inline space="small">
          <Tag onClear={() => {}} clearLabel="Dismiss">
            Tag
          </Tag>
          <Tag onClear={() => {}} clearLabel="Dismiss">
            Tag
          </Tag>
          <Tag onClear={() => {}} clearLabel="Dismiss">
            Tag
          </Tag>
        </Inline>
      ),
    },
  ],
};

export default docs;
