import React from 'react';
import { ComponentDetail } from '../../../../site/src/types';
import source from '../../../utils/source.macro';
import { IconWorkExperience, Heading, Stack } from '../../';

const docs: ComponentDetail = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconWorkExperience />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
};

export default docs;
