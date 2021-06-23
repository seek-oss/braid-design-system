import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import source from '../../../utils/source.macro';
import {
  IconVisibility,
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
            <IconVisibility />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            VISIBLE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconVisibility hidden />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            HIDDEN
          </Text>
        </Stack>
      </Inline>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Toggling visibility',
      description: (
        <Text>
          The visibility can be changed using the <Strong>hidden</Strong> prop.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <IconVisibility hidden={getState('hidden')} />
            <Inline space="small">
              <Button onClick={() => toggleState('hidden')}>
                {getState('hidden') ? 'visible' : 'hidden'}
              </Button>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
