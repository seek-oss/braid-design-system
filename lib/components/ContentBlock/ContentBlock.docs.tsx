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
      label: 'Xsmall Content Block',
      Example: () => (
        <ContentBlock width="xsmall">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Small Content Block',
      Example: () => (
        <ContentBlock width="small">
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
      name: 'Xsmall',
      code: (
        <ContentBlock width="xsmall">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      name: 'Small',
      code: (
        <ContentBlock width="small">
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
