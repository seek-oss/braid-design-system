import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tag, Card, Inline } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Tag',
      Example: () => (
        <Card>
          <Tag>Tag</Tag>
        </Card>
      ),
    },
    {
      label: 'Clearable Tag',
      Example: ({ handler }) => (
        <Card>
          <Tag onClear={handler} clearLabel="Clear tag">
            Tag
          </Tag>
        </Card>
      ),
    },
    {
      label: 'Truncated Tag',
      docsSite: false,
      Example: ({ handler }) => (
        <Card>
          <Tag onClear={handler} clearLabel="Clear tag">
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog.
          </Tag>
        </Card>
      ),
    },
    {
      label: 'Test: Standard and clearable tags should be equal height',
      docsSite: false,
      Example: ({ handler }) => (
        <Card>
          <Inline space="small">
            <Tag>Tag</Tag>
            <Tag onClear={handler} clearLabel="Clear tag">
              Tag
            </Tag>
          </Inline>
        </Card>
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
