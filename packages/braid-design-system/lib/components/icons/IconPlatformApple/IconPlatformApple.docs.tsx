import React from 'react';
import { ComponentDocs } from 'braid-site/types';
import { iconDocumentation } from '../iconDocumentation.docs';
import source from '@braid-design-system/source.macro';
import { IconPlatformApple, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconPlatformApple />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
