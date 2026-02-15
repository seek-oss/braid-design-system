import source from '@braid-design-system/source.macro';

import { ContentBlock, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <ContentBlock>
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    description: 'Xsmall',
    code: source(
      <ContentBlock width="xsmall">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <ContentBlock width="small">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    description: 'Large',
    code: source(
      <ContentBlock width="large">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
  {
    description: 'Left aligned',
    code: source(
      <ContentBlock width="small" align="left">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
];
