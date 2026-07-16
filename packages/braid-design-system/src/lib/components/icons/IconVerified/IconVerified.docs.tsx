import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  IconVerified,
  ButtonIcon,
  Heading,
  Inline,
  Stack,
  Strong,
  Text,
} from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconVerified />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconVerified active />
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
          The icon can be marked as active using the <Strong>active</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <ButtonIcon
              icon={<IconVerified active={getState('active')} />}
              size="large"
              label={
                getState('active')
                  ? 'Verified: active = true'
                  : 'Verified: active = false'
              }
              onClick={() => toggleState('active')}
            />
            <Text tone="secondary" size="small">
              (Click icon above to toggle active state)
            </Text>
          </Stack>,
        ),
    },
    ...iconDocumentation,
  ],
};

export default docs;
