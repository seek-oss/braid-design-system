import source from '@braid-design-system/source.macro';

import {
  ButtonIcon,
  IconAdd,
  IconBookmark,
  IconHelp,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Soft',
    code: source(
      <ButtonIcon variant="soft" icon={<IconBookmark />} label="Bookmark" />,
    ),
  },
  {
    description: 'Transparent',
    code: source(
      <ButtonIcon variant="transparent" icon={<IconHelp />} label="Help" />,
    ),
  },
  {
    description: 'Small',
    code: source(<ButtonIcon size="small" icon={<IconAdd />} label="Add" />),
  },
  {
    description: 'Large',
    code: source(<ButtonIcon size="large" icon={<IconAdd />} label="Add" />),
  },
  {
    description: 'Form accent',
    code: source(
      <ButtonIcon tone="formAccent" icon={<IconAdd />} label="Add" />,
    ),
  },
];
