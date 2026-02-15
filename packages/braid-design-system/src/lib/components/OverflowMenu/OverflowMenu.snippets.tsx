import source from '@braid-design-system/source.macro';

import { OverflowMenu, MenuItem } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <OverflowMenu label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <OverflowMenu size="small" label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>,
    ),
  },
];
