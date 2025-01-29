import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Box, Heading, Stack, IconImage, Divider } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Levels',
      Example: () =>
        source(
          <Stack space="large">
            <Heading level="1">Level 1</Heading>
            <Heading level="2">Level 2</Heading>
            <Heading level="3">Level 3</Heading>
            <Heading level="4">Level 4</Heading>
          </Stack>,
        ),
    },
    {
      label: 'Weight',
      Example: () =>
        source(
          <Stack space="large">
            <Heading level="1" weight="weak">
              Level 1 Weak
            </Heading>
            <Heading level="2" weight="weak">
              Level 2 Weak
            </Heading>
            <Heading level="3" weight="weak">
              Level 3 Weak
            </Heading>
            <Heading level="4" weight="weak">
              Level 4 Weak
            </Heading>
          </Stack>,
        ),
    },
    {
      label: 'Alignment',
      Example: () =>
        source(
          <Stack space="large">
            <Heading level="2" align="left">
              Left (default)
            </Heading>
            <Divider />
            <Heading level="2" align="center">
              Center
            </Heading>
            <Divider />
            <Heading level="2" align="right">
              Right
            </Heading>
            <Divider />
            <Heading level="2" align={{ mobile: 'center', tablet: 'left' }}>
              Center on mobile
            </Heading>
          </Stack>,
        ),
    },
    {
      label: 'Truncation',
      Example: () =>
        source(
          <Box style={{ width: 150 }}>
            <Heading level="2" maxLines={1}>
              Long heading
            </Heading>
          </Box>,
        ),
    },
    {
      label: 'With an icon',
      Example: () =>
        source(
          <Stack space="large">
            <Heading level="1" icon={<IconImage />}>
              Level 1 with icon
            </Heading>
            <Heading level="2" icon={<IconImage />}>
              Level 2 with icon
            </Heading>
            <Heading level="3" icon={<IconImage />}>
              Level 3 with icon
            </Heading>
            <Heading level="4" icon={<IconImage />}>
              Level 4 with icon
            </Heading>
          </Stack>,
        ),
    },
  ],
};
