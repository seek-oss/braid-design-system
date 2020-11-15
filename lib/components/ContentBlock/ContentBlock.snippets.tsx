import React from 'react';
import { Snippets } from '../private/Snippets';
import { ContentBlock, Placeholder } from '../../playroom/components';

export const snippets: Snippets = [
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
];
