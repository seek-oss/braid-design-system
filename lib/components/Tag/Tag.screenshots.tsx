import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Tag, Inline } from '../';

export const screenshots: ComponentScreenshot = {
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
};
