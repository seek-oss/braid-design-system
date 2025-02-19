import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { IconCoverLetter, Heading, Stack } from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconCoverLetter />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [...iconDocumentation],
};

export default docs;
