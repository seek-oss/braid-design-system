import React from 'react';
import { ComponentDocs } from '../../../../../../site/src/types';
import source from '../../../utils/source.macro';
import {
  IconChevron,
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
            <IconChevron />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            DOWN
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconChevron direction="up" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            UP
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconChevron direction="left" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            LEFT
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconChevron direction="right" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            RIGHT
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
          The chevron can be rotated using the <Strong>direction</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Stack space="large" dividers>
            <IconChevron direction={getState('direction')} />
            <Inline space="small">
              <Button onClick={() => setState('direction', 'up')}>up</Button>
              <Button onClick={() => setState('direction', 'down')}>
                down
              </Button>
              <Button onClick={() => setState('direction', 'left')}>
                left
              </Button>
              <Button onClick={() => setState('direction', 'right')}>
                right
              </Button>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
