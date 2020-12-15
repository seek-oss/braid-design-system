import React from 'react';
import { ComponentDetails } from '../../../site/src/types';
import { useBreakpoint, Alert, Strong, Text } from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDetails = {
  category: 'Logic',
  Example: () =>
    source(
      <Text>
        Current breakpoint: <Strong>{useBreakpoint()}</Strong>
      </Text>,
    ),
  description: (
    <Alert tone="caution">
      <Text weight="medium">
        Avoid use of this hook where possible. Responsive properties and media
        queries are a better option in most cases.
      </Text>
    </Alert>
  ),
  alternatives: [{ name: 'Box', description: 'For custom layouts.' }],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          This hook will return the breakpoint the browser viewport currently
          falls within (<Strong>mobile</Strong>, <Strong>tablet</Strong> or{' '}
          <Strong>desktop</Strong>). As this can only be calculated in the
          browser, the value may also be null. Window resizing is supported.
        </Text>
      ),
      code: `
        const breakpoint = useBreakpoint();

        return <Text>Current breakpoint: {breakpoint}</Text>;
      `,
    },
  ],
};

export default docs;
