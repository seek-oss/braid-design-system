import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  IconEnlarge,
  Heading,
  Stack,
  Strong,
  Text,
  Inline,
  ButtonIcon,
} from '../../';
import { iconDocumentation } from '../iconCommon.docs';

const docs: ComponentDocs = {
  category: 'Icon',
  Example: () =>
    source(
      <Inline space={{ mobile: 'large', tablet: 'xlarge' }} align="center">
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconEnlarge />
          </Heading>
          <Text tone="secondary" size="small" align="center">
            INACTIVE
          </Text>
        </Stack>
        <Stack space="medium" align="center">
          <Heading component="div" level="1">
            <IconEnlarge active />
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
          Often used to toggle between englarged and reduced states, setting the{' '}
          <Strong>active</Strong> prop to <Strong>true</Strong> will reverse the
          icon&rsquo;s intent.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <ButtonIcon
              icon={<IconEnlarge active={getState('active')} />}
              size="large"
              label={
                getState('active')
                  ? 'Enlarge: active = true'
                  : 'Enlarge: active = false'
              }
              onClick={() => toggleState('active')}
            />

            <Text tone="secondary" size="small">
              (Click icon above to toggle)
            </Text>
          </Stack>,
        ),
    },
    ...iconDocumentation,
  ],
};

export default docs;
