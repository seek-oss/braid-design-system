import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { IconList, Heading, Stack, Text, TextLink } from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  deprecationWarning: (
    <Text>
      This component has been deprecated and will be removed in a future
      release.
      <br />
      Please switch to{' '}
      <TextLink href="/components/IconBulletList">IconBulletList</TextLink>{' '}
      instead.
    </Text>
  ),
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconList />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
