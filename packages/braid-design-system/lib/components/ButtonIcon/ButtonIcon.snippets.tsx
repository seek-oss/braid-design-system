import React from 'react';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';
import {
  ButtonIcon,
  IconAdd,
  IconBookmark,
  IconClear,
  IconHelp,
} from '../../playroom/components';

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
    name: 'Secondary',
    code: source(
      <ButtonIcon
        tone="secondary"
        icon={<IconClear />}
        label="Close"
        id="buttonicon-secondary"
      />,
    ),
  },
];
