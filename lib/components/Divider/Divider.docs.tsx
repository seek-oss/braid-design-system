import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Divider, Card, Stack, Text, Strong } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Card rounded>
        <Stack space="xlarge">
          <Stack space="medium">
            <Text tone="secondary">Regular weight</Text>
            <Divider />
          </Stack>
          <Stack space="medium">
            <Text tone="secondary">Strong weight</Text>
            <Divider weight="strong" />
          </Stack>
        </Stack>
      </Card>,
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
