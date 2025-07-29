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
    name: 'Soft',
    code: source(
      <ButtonIcon variant="soft" icon={<IconBookmark />} label="Bookmark" />,
    ),
  },
  {
    name: 'Transparent',
    code: source(
      <ButtonIcon variant="transparent" icon={<IconHelp />} label="Help" />,
    ),
  },
  {
    name: 'Small',
    code: source(<ButtonIcon size="small" icon={<IconAdd />} label="Add" />),
  },
  {
    name: 'Large',
    code: source(<ButtonIcon size="large" icon={<IconAdd />} label="Add" />),
  },
  {
    name: 'Form accent',
    code: source(
      <ButtonIcon tone="formAccent" icon={<IconAdd />} label="Add" />,
    ),
  },
];
