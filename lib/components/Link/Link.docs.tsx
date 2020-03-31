import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link, Stack, Text, TextLink, Box } from '..';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Logic',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        By default, renders a plain `a` tag without any visual styling, or the
        `linkComponent` that was provided via{' '}
        <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
      </Text>
      <Text>
        If you want a visually styled text link, use{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink> instead.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Standard Link',
      Container: ({ children }) => <Box display="flex">{children}</Box>,
      Example: () => (
        <Link href="#">
          <Placeholder
            label="This placeholder is a link"
            width="300"
            height="100"
          />
        </Link>
      ),
    },
  ],
};

export default docs;
