import React from 'react';
import type { ComponentDocs } from 'site/types';
import { iconDocumentation } from '../iconCommon.docs';
import source from '@braid-design-system/source.macro';
import {
  IconBookmark,
  ButtonIcon,
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
            <IconBookmark />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconBookmark active />
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
          The bookmark can be marked as active using the <Strong>active</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <ButtonIcon
              icon={<IconBookmark active={getState('active')} />}
              size="large"
              label={
                getState('active')
                  ? 'Bookmark: active = true'
                  : 'Bookmark: active = false'
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
