import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock, Box } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="neutralLight">{children}</Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default Content Block',
      Container,
      Example: () => (
        <ContentBlock>
          <Placeholder height={100} label="Content block" />
        </ContentBlock>
      ),
    },
    {
      label: 'Large Content Block',
      Container,
      Example: () => (
        <ContentBlock width="large">
          <Placeholder height={100} label="Content block" />
        </ContentBlock>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <ContentBlock>
          <Placeholder height={100} label="Content block" />
        </ContentBlock>
      ),
    },
    {
      name: 'Large',
      code: (
        <ContentBlock width="large">
          <Placeholder height={100} label="Content block" />
        </ContentBlock>
      ),
    },
  ],
};

export default docs;
