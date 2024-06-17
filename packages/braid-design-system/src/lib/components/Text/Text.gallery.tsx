import React from 'react';
import { Box, Text, Stack, IconImage } from '../';
import type { GalleryComponent } from 'site/types';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Sizes',
      Example: () =>
        source(
          <Stack space="large">
            <Text size="large">Large</Text>
            <Text size="standard">Standard (default)</Text>
            <Text size="small">Small</Text>
            <Text size="xsmall">Xsmall</Text>
          </Stack>,
        ),
    },
    {
      label: 'Weights',
      Example: () =>
        source(
          <Stack space="large">
            <Text weight="regular">Regular (default)</Text>
            <Text weight="medium">Medium</Text>
            <Text weight="strong">Strong</Text>
          </Stack>,
        ),
    },
    {
      label: 'Alignment',
      Example: () =>
        source(
          <Stack space="large" dividers>
            <Text align="left">Left (default)</Text>
            <Text align="center">Center</Text>
            <Text align="right">Right</Text>
            <Text align={{ mobile: 'center', tablet: 'left' }}>
              Center on mobile
            </Text>
          </Stack>,
        ),
    },
    {
      label: 'Truncation',
      Example: () =>
        source(
          <Box style={{ width: 90 }}>
            <Text maxLines={1}>Long piece of text</Text>
          </Box>,
        ),
    },
    {
      label: 'Tones',
      background: 'surface',
      Example: () =>
        source(
          <Stack space="large">
            <Text tone="neutral">neutral (default)</Text>
            <Text tone="secondary">secondary</Text>
            <Text tone="promote">promote</Text>
            <Text tone="info">info</Text>
            <Text tone="positive">positive</Text>
            <Text tone="critical">critical</Text>
          </Stack>,
        ),
    },
    {
      label: 'With an icon',
      Example: () =>
        source(
          <Stack space="large">
            <Text size="large" icon={<IconImage />}>
              Large with icon
            </Text>
            <Text size="standard" icon={<IconImage />}>
              Standard with icon
            </Text>
            <Text size="small" icon={<IconImage />}>
              Small with icon
            </Text>
            <Text size="xsmall" icon={<IconImage />}>
              Xsmall with icon
            </Text>
          </Stack>,
        ),
    },
  ],
};
