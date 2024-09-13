import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import {
  IconArrow,
  Button,
  Heading,
  Inline,
  Stack,
  Strong,
  Text,
  Divider,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconArrow />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            UP
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconArrow direction="down" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            DOWN
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconArrow direction="left" />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            LEFT
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconArrow direction="right" />
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
          The Arrow can be rotated using the <Strong>direction</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Stack space="large">
            <IconArrow direction={getState('direction')} />
            <Divider />
            <Inline space="small">
              <Button onClick={() => setState('direction', 'down')}>
                down
              </Button>
              <Button onClick={() => setState('direction', 'up')}>up</Button>
              <Button onClick={() => setState('direction', 'right')}>
                right
              </Button>
              <Button onClick={() => setState('direction', 'left')}>
                left
              </Button>
            </Inline>
          </Stack>,
        ),
    },
    iconDocumentation,
  ],
};

export default docs;
