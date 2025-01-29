import source from '@braid-design-system/source.macro';

import { ContentBlock, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

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
  {
    name: 'Left aligned',
    code: source(
      <ContentBlock width="small" align="left">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  },
];
