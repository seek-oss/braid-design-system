import React from 'react';
import { ComponentDocs } from '../../../../../../site/src/types';
import source from '../../../utils/source.macro';
import {
  IconHeart,
  Button,
  Heading,
  Inline,
  Stack,
  Strong,
  Text,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconHeart />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconHeart active />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            ACTIVE
          </Text>
        </Stack>
      </Inline>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Toggling active state',
      description: (
        <Text>
          The star can be marked as active using the <Strong>active</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <IconHeart active={getState('active')} />
            <Inline space="small">
              <Button onClick={() => toggleState('active')}>
                {getState('active') ? 'inactive' : 'active'}
              </Button>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
