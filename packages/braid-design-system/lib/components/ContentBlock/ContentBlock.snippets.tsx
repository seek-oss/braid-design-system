import React from 'react';
import { Snippets } from '../private/Snippets';
import { ContentBlock, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <ContentBlock>
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    name: 'Xsmall',
    code: source(
      <ContentBlock width="xsmall">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    name: 'Small',
    code: source(
      <ContentBlock width="small">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    name: 'Large',
    code: source(
      <ContentBlock width="large">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
];
