import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import { IconBluetooth, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconBluetooth />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
