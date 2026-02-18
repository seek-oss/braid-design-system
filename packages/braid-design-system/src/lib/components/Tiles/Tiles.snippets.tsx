import source from '@braid-design-system/source.macro';

import { Tiles, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: '2 columns',
    code: source(
      <Tiles space="small" columns={2}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>,
    ),
  },
  {
    description: 'Responsive columns',
    code: source(
      <Tiles space="small" columns={{ mobile: 2, tablet: 4 }}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>,
    ),
  },
];
