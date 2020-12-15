import React from 'react';
import { ComponentDetails } from '../../../../site/src/types';
import source from '../../../utils/source.macro';
import { IconDocument, Heading, Stack } from '../../';

const docs: ComponentDetails = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconDocument />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
};

export default docs;
