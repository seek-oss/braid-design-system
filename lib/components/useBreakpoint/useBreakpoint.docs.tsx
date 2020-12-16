import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useBreakpoint, Alert, Strong, Text } from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
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
        This Hook returns <Strong>null</Strong> when rendering server-side or
        statically rendering, so you should avoid this Hook where possible.
        Responsive props and media queries are preferable in most cases.
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
          This Hook will return the breakpoint the browser viewport currently
          falls within (<Strong>mobile</Strong>, <Strong>tablet</Strong> or{' '}
          <Strong>desktop</Strong>). As this can only be calculated in the
          browser, the value will also be <Strong>null</Strong> when rendering
          server-side or statically rendering. Window resizing is supported.
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
