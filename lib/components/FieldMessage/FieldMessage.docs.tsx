import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { FieldMessage, Alert, Text, Strong, Stack, Box } from '../';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Box style={{ maxWidth: 400 }}>
        <Stack space="large">
          <Stack space="small">
            <Box aria-describedby="message1">
              <Placeholder height={40} />
            </Box>
            <FieldMessage
              id="message1"
              tone="critical"
              message="This is a critical message."
            />
          </Stack>

          <Stack space="small">
            <Box aria-describedby="message2">
              <Placeholder height={40} />
            </Box>
            <FieldMessage
              id="message2"
              tone="positive"
              message="This is a positive message."
            />
          </Stack>
        </Stack>
      </Box>,
    ),
  description: (
    <Alert tone="info">
      <Text weight="medium">
        This component is only required when building a custom field that isn’t
        provided by Braid.
      </Text>
    </Alert>
  ),
  accessibility: (
    <Text>
      The <Strong>id</Strong> prop is required, but you should also ensure that
      the associated field has a matching <Strong>aria-describedby</Strong>{' '}
      prop.
    </Text>
  ),
  alternatives: [
    {
      name: 'FieldLabel',
      description: 'For displaying labels above a custom field',
    },
  ],
};

export default docs;
