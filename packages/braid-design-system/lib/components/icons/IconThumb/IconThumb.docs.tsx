import React from 'react';
import { ComponentDocs } from '../../../../../../site/src/types';
import source from '../../../utils/source.macro';
import {
  IconThumb,
  Heading,
  Stack,
  Inline,
  Text,
  Strong,
  Button,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconThumb />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            UP
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconThumb direction="down" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            DOWN
          </Text>
        </Stack>
      </Inline>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Changing the direction',
      description: (
        <Text>
          The thumb can be rotated using the <Strong>direction</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Stack space="large" dividers>
            <IconThumb direction={getState('direction')} />
            <Inline space="small">
              <Button onClick={() => setState('direction', 'up')}>up</Button>
              <Button onClick={() => setState('direction', 'down')}>
                down
              </Button>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
