import React from 'react';
import { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import { IconPhone, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconPhone />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
