import React from 'react';
import { ComponentDocs } from '../../../../../../site/src/types';
import { iconDocumentation } from '../iconDocumentation';
import source from '../../../utils/source.macro';
import { IconZoomOut, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconZoomOut />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
