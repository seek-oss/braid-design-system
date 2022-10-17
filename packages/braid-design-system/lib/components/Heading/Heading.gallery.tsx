import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Box, Heading, Stack, IconPromote } from '../';

import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
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
        <Stack space="large" dividers>
          <Heading level="2" align="left">
            Left (default)
          </Heading>
          <Heading level="2" align="center">
            Center
          </Heading>
          <Heading level="2" align="right">
            Right
          </Heading>
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
          <Heading level="2" truncate>
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
          <Heading level="1" icon={<IconPromote />}>
            Level 1 with icon
          </Heading>
          <Heading level="2" icon={<IconPromote />}>
            Level 2 with icon
          </Heading>
          <Heading level="3" icon={<IconPromote />}>
            Level 3 with icon
          </Heading>
          <Heading level="4" icon={<IconPromote />}>
            Level 4 with icon
          </Heading>
        </Stack>,
      ),
  },
];
