import React from 'react';
import { ComponentDocs } from 'braid-site/types';
import source from '@braid-design-system/source.macro';
import { IconCaution, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconCaution />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
};

export default docs;
