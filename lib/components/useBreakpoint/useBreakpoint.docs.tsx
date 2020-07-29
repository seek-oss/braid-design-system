import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Alert } from '../Alert/Alert';
import { Strong } from '../Strong/Strong';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';

import { useBreakpoint } from './useBreakpoint';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Stack space="large">
      <Text>
        This hook will return the breakpoint the browser viewport currently
        falls within (<Strong>mobile</Strong>, <Strong>tablet</Strong> or{' '}
        <Strong>desktop</Strong>). As this can only be calculated in the
        browser, you must also handle an <Strong>unknown</Strong> value. Window
        resizing is supported.
      </Text>
      <Alert tone="caution">
        <Text>
          Avoid use of this hook where possible.{' '}
          <TextLink href="/guides/development-workflow#Need-responsive%20styles?">
            Responsive properties
          </TextLink>{' '}
          and media queries are a better option in most cases.
        </Text>
      </Alert>
    </Stack>
  ),
  screenshotWidths: [],
  examples: [
    {
      playroom: false,
      Example: () => {
        const breakpoint = useBreakpoint();

        return <Text>Current breakpoint: {breakpoint}</Text>;
      },
      code: `
        const breakpoint = useBreakpoint();

        return <Text>Current breakpoint: {breakpoint}</Text>;
      `,
    },
  ],
};

export default docs;
