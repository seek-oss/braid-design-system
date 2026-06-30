import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import {
  ButtonIcon,
  Heading,
  Inline,
  IconHelp,
  IconBookmark,
  IconAdd,
  IconClear,
  Stack,
  Text,
} from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Variant',
      Example: () =>
        source(
          <Inline space="medium" noWrap alignY="center">
            <ButtonIcon icon={<IconBookmark />} label="Solid" variant="solid" />
            <ButtonIcon icon={<IconBookmark />} label="Soft" variant="soft" />
            <ButtonIcon
              icon={<IconBookmark />}
              label="Transparent"
              variant="transparent"
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
