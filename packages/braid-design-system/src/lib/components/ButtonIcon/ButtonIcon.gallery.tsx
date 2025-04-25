import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

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

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Soft',
      Example: () =>
        source(
          <Inline space="small">
            <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
            <ButtonIcon icon={<IconAdd />} label="Add" />
            <ButtonIcon icon={<IconShare />} label="Share" />
            <ButtonIcon icon={<IconOverflow />} label="More" />
          </Inline>,
        ),
    },
    {
      label: 'Transparent',
      Example: () =>
        source(
          <Inline space="medium">
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
            />
            <ButtonIcon variant="transparent" icon={<IconAdd />} label="Add" />
            <ButtonIcon
              variant="transparent"
              icon={<IconShare />}
              label="Share"
            />
            <ButtonIcon
              variant="transparent"
              icon={<IconOverflow />}
              label="More"
            />
          </Inline>,
        ),
    },
    {
      label: 'Sizes',
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="medium" alignY="center">
              <ButtonIcon size="small" icon={<IconAdd />} label="Small size" />
              <Text tone="secondary" size="xsmall">
                SMALL
              </Text>
            </Inline>
            <Inline space="medium" alignY="center">
              <ButtonIcon
                size="standard"
                icon={<IconAdd />}
                label="Standard size"
              />
              <Text tone="secondary" size="xsmall">
                STANDARD
              </Text>
            </Inline>
            <Inline space="medium" alignY="center">
              <ButtonIcon size="large" icon={<IconAdd />} label="Large size" />
              <Text tone="secondary" size="xsmall">
                LARGE
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Tone',
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="small" alignY="center">
              <ButtonIcon
                tone="neutral"
                variant="soft"
                icon={<IconClear />}
                label="Close"
              />
              <ButtonIcon
                tone="neutral"
                variant="transparent"
                bleed={false}
                icon={<IconClear />}
                label="Close"
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
              />
              <ButtonIcon
                tone="formAccent"
                variant="transparent"
                bleed={false}
                icon={<IconAdd />}
                label="Add"
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
      Example: () =>
        source(
          <Inline space="small" alignY="center">
            <Heading level="2">Heading</Heading>
            <ButtonIcon
              bleed={true}
              size="large"
              icon={<IconHelp />}
              label="Help"
            />
          </Inline>,
        ),
    },
  ],
};
