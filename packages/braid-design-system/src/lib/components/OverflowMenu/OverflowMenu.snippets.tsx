import source from '@braid-design-system/source.macro';

import { OverflowMenu, MenuItem } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <OverflowMenu label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>,
    ),
  },
  {
    name: 'Small',
    code: source(
      <OverflowMenu size="small" label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>,
    ),
  },
];
