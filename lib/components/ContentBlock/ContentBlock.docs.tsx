import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default Content Block',
      Example: () => (
        <ContentBlock>
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Large Content Block',
      Example: () => (
        <ContentBlock width="large">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <ContentBlock>
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      name: 'Large',
      code: (
        <ContentBlock width="large">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
  ],
};

export default docs;
