import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '../../../utils/source.macro';
import { IconResume, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconResume />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
