import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import {
  IconCareer,
  Heading,
  Stack,
  ButtonIcon,
  Inline,
  Strong,
  Text,
} from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconCareer />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconCareer active />
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
      background: 'surface',
      description: (
        <Text>
          Can be marked as active using the <Strong>active</Strong> prop.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <ButtonIcon
              icon={<IconCareer active={getState('active')} />}
              size="large"
              label={
                getState('active')
                  ? 'Career: active = true'
                  : 'Career: active = false'
              }
              id="toggle-example"
              onClick={() => toggleState('active')}
            />

            <Text tone="secondary" size="small">
              (Click icon above to toggle)
            </Text>
          </Stack>,
        ),
    },
    iconDocumentation,
  ],
};

export default docs;
