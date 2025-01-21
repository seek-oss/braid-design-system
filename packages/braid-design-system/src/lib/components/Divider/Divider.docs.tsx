import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Divider, Stack, Text } from '../';

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
  alternatives: [],
};

export default docs;
