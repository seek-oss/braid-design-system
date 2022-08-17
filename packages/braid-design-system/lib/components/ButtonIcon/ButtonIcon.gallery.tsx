import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import source from '../../utils/source.macro';
import {
  ButtonIcon,
  Heading,
  Inline,
  IconHelp,
  IconBookmark,
  IconOverflow,
  IconShare,
  IconAdd,
  IconClear,
} from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <ButtonIcon
            icon={<IconBookmark />}
            label="Bookmark"
            id="buttonicon-default-1"
          />
          <ButtonIcon
            icon={<IconAdd />}
            label="Add"
            id="buttonicon-default-2"
          />
          <ButtonIcon
            icon={<IconShare />}
            label="Share"
            id="buttonicon-default-3"
          />
          <ButtonIcon
            icon={<IconOverflow />}
            label="More"
            id="buttonicon-default-4"
          />
        </Inline>,
      ),
  },
  {
    label: 'Transparent',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="medium">
          <ButtonIcon
            variant="transparent"
            icon={<IconBookmark />}
            label="Bookmark"
            id="buttonicon-transparent-1"
          />
          <ButtonIcon
            variant="transparent"
            icon={<IconAdd />}
            label="Add"
            id="buttonicon-transparent-2"
          />
          <ButtonIcon
            variant="transparent"
            icon={<IconShare />}
            label="Share"
            id="buttonicon-transparent-3"
          />
          <ButtonIcon
            variant="transparent"
            icon={<IconOverflow />}
            label="More"
            id="buttonicon-transparent-4"
          />
        </Inline>,
      ),
  },
  {
    label: 'Large size',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <ButtonIcon
            size="large"
            variant="soft"
            icon={<IconAdd />}
            label="Add"
            id="buttonicon-large-1"
          />
          <ButtonIcon
            size="large"
            variant="transparent"
            bleed={false}
            icon={<IconAdd />}
            label="Add"
            id="buttonicon-large-2"
          />
        </Inline>,
      ),
  },
  {
    label: 'Secondary',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <ButtonIcon
            tone="secondary"
            variant="soft"
            icon={<IconClear />}
            label="Close"
            id="buttonicon-secondary-1"
          />
          <ButtonIcon
            tone="secondary"
            variant="transparent"
            bleed={false}
            icon={<IconClear />}
            label="Close"
            id="buttonicon-secondary-2"
          />
        </Inline>,
      ),
  },
  {
    label: 'With bleed',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            bleed={true}
            size="large"
            icon={<IconHelp />}
            label="Help"
            id="buttonicon-bleed-1"
          />
        </Inline>,
      ),
  },
];
