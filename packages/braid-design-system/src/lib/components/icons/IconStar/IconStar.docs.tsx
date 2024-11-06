import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import {
  IconStar,
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
            <IconStar />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconStar active />
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
          <Stack space="large">
            <IconStar active={getState('active')} />
            <Divider />
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
