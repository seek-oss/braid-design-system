import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { IconSentiment, Heading, Stack, Inline, Strong, Text } from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconSentiment feeling="negative" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            NEGATIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconSentiment feeling="neutral" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            NEUTRAL
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconSentiment feeling="positive" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            POSITIVE
          </Text>
        </Stack>
      </Inline>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Changing the feeling',
      description: (
        <Text>
          The sentiment of the icon can be changed using the{' '}
          <Strong>feeling</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Heading component="div" level="2">
              <IconSentiment feeling="negative" />
            </Heading>

            <Heading component="div" level="2">
              <IconSentiment feeling="neutral" />
            </Heading>

            <Heading component="div" level="2">
              <IconSentiment feeling="positive" />
            </Heading>
          </Inline>,
        ),
    },
    ...iconDocumentation,
  ],
};

export default docs;
