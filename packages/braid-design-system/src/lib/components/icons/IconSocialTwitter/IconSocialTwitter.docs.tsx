import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import { IconSocialTwitter, Heading, Stack, Text, TextLink } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  deprecationWarning: (
    <Text>
      This component has been deprecated and will be removed in a future
      release.
      <br />
      Please switch to{' '}
      <TextLink href="/components/IconSocialX">IconSocialX</TextLink> instead.
    </Text>
  ),
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconSocialTwitter />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [iconDocumentation],
};

export default docs;
