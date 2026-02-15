import source from '@braid-design-system/source.macro';

import { Inline, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Xsmall space',
    code: source(
      <Inline space="xsmall">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
  {
    description: 'Vertically centered',
    code: source(
      <Inline space="small" alignY="center">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
  {
    description: 'Responsive space',
    code: source(
      <Inline space={{ mobile: 'small', tablet: 'large' }}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
];
