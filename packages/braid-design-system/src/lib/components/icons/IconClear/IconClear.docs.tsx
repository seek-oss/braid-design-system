import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { IconClear, Heading, Stack } from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconClear />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [...iconDocumentation],
};

export default docs;
