import React from 'react';
import { seekAnz } from '../../themes';
import { ComponentDocs } from '../../../../../site/src/types';
import { Stack, Text, Strong, TextLink, Alert } from '..';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Stack space="large">
      <Text>
        Alternative to{' '}
        <TextLink href="/components/BraidProvider">BraidProvider</TextLink> for
        unit test environments.
      </Text>
      <Alert>
        <Text weight="medium">
          This provider should <Strong>not</Strong> be used in production code.
        </Text>
      </Alert>
    </Stack>
  ),
  alternatives: [
    {
      name: 'BraidProvider',
      description: 'For production apps.',
    },
  ],
  additional: [
    {
      label: 'Specifying a theme',
      description: (
        <Text>
          Providing <Strong>themeName</Strong> allows you to hardcode a specific
          theme for a given test context.
        </Text>
      ),
      code: `
        import { BraidTestProvider } from 'braid-design-system/test';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <BraidTestProvider themeName="${seekAnz.name}">
              ...
            </BraidTestProvider>
          );
        });
      `,
    },
    {
      label: 'Specifying a breakpoint',
      description: (
        <Text>
          Providing <Strong>breakpoint</Strong> allows you to hardcode a
          specific breakpoint for a given test context.
        </Text>
      ),
      code: `
        import { BraidTestProvider } from 'braid-design-system/test';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <BraidTestProvider breakpoint="tablet">
              ...
            </BraidTestProvider>
          );
        });
      `,
    },
  ],
};

export default docs;
