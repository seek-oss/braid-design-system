import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '../../../utils/source.macro';
import {
  IconEnlarge,
  Heading,
  Stack,
  Strong,
  Text,
  Inline,
  Button,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconEnlarge />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Toggling active state',
      description: (
        <Text>
          Often used to toggle between englarged and reduced states, setting the{' '}
          <Strong>active</Strong> prop to <Strong>true</Strong> will reverse the
          icon's intent.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <IconEnlarge active={getState('active')} />
            <Inline space="small">
              <Button onClick={() => toggleState('active')}>
                {getState('active') ? 'inactive' : 'active'}
              </Button>
            </Inline>
          </Stack>,
        ),
    },
    iconDocumentation,
  ],
};

export default docs;
