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
      <ButtonIcon
        variant="soft"
        icon={<IconBookmark />}
        label="Bookmark"
        id="buttonicon-soft"
      />,
    ),
  },
  {
    name: 'Transparent',
    code: source(
      <ButtonIcon
        variant="transparent"
        icon={<IconHelp />}
        label="Help"
        id="buttonicon-transparent"
      />,
    ),
  },
  {
    name: 'Small',
    code: source(
      <ButtonIcon
        size="small"
        icon={<IconAdd />}
        label="Add"
        id="buttonicon-small"
      />,
    ),
  },
  {
    name: 'Large',
    code: source(
      <ButtonIcon
        size="large"
        icon={<IconAdd />}
        label="Add"
        id="buttonicon-large"
      />,
    ),
  },
  {
    name: 'Form accent',
    code: source(
      <ButtonIcon
        tone="formAccent"
        icon={<IconAdd />}
        label="Add"
        id="buttonicon-formAccent"
      />,
    ),
  },
];
