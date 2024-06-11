import React from 'react';
import type { ComponentExample } from 'site/types';
import source from '@braid-design-system/source.macro';
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
  Stack,
  Text,
} from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Soft',
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
    label: 'Sizes',
    background: 'surface',
    Example: () =>
      source(
        <Stack space="medium">
          <Inline space="medium" alignY="center">
            <ButtonIcon
              size="small"
              icon={<IconAdd />}
              label="Small size"
              id="size-0"
            />
            <Text tone="secondary" size="xsmall">
              SMALL
            </Text>
          </Inline>
          <Inline space="medium" alignY="center">
            <ButtonIcon
              size="standard"
              icon={<IconAdd />}
              label="Standard size"
              id="size-1"
            />
            <Text tone="secondary" size="xsmall">
              STANDARD
            </Text>
          </Inline>
          <Inline space="medium" alignY="center">
            <ButtonIcon
              size="large"
              icon={<IconAdd />}
              label="Large size"
              id="size-2"
            />
            <Text tone="secondary" size="xsmall">
              LARGE
            </Text>
          </Inline>
        </Stack>,
      ),
  },
  {
    label: 'Tone',
    background: 'surface',
    Example: () =>
      source(
        <Stack space="medium">
          <Inline space="small" alignY="center">
            <ButtonIcon
              tone="neutral"
              variant="soft"
              icon={<IconClear />}
              label="Close"
              id="buttonicon-neutral-1"
            />
            <ButtonIcon
              tone="neutral"
              variant="transparent"
              bleed={false}
              icon={<IconClear />}
              label="Close"
              id="buttonicon-neutral-2"
            />
            <Text tone="secondary" size="xsmall">
              NEUTRAL
            </Text>
          </Inline>
          <Inline space="small" alignY="center">
            <ButtonIcon
              tone="formAccent"
              variant="soft"
              icon={<IconAdd />}
              label="Add"
              id="buttonicon-formAccent-1"
            />
            <ButtonIcon
              tone="formAccent"
              variant="transparent"
              bleed={false}
              icon={<IconAdd />}
              label="Add"
              id="buttonicon-formAccent-2"
            />
            <Text tone="secondary" size="xsmall">
              FORMACCENT
            </Text>
          </Inline>
        </Stack>,
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
