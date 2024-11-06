import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import {
  IconThumb,
  Heading,
  Stack,
  Inline,
  Text,
  Strong,
  Button,
  Divider,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
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
          <Stack space="large">
            <IconThumb direction={getState('direction')} />
            <Divider />
            <Inline space="small">
              <Button onClick={() => setState('direction', 'up')}>up</Button>
              <Button onClick={() => setState('direction', 'down')}>
                down
              </Button>
            </Inline>
          </Stack>,
        ),
    },
    iconDocumentation,
  ],
};

export default docs;
