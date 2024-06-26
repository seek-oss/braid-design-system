import React from 'react';
import type { ComponentDocs } from 'site/types';
import { Divider, Stack, Text, Strong } from '../';
import source from '@braid-design-system/source.macro';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Stack space="xlarge">
        <Stack space="medium">
          <Text tone="secondary">Regular weight</Text>
          <Divider />
        </Stack>
        <Stack space="medium">
          <Text tone="secondary">Strong weight</Text>
          <Divider weight="strong" />
        </Stack>
      </Stack>,
    ),
  accessibility: (
    <Text>
      Renders a semantic <Strong>hr</Strong> element.
    </Text>
  ),
  alternatives: [
    {
      name: 'Stack',
      description: 'Supports rendering dividers between every stack item.',
    },
  ],
};

export default docs;
