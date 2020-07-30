import React from 'react';
import { seekAnz } from '../../themes';
import { ComponentDocs } from '../../../site/src/types';
import { Stack, Text, Strong } from '..';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Stack space="large">
      <Text>
        Alternative to `BraidProvider` for unit test environments. Note that, as
        the name implies, this should <Strong>not</Strong> be used in production
        code.
      </Text>
    </Stack>
  ),
  screenshotWidths: [],
  examples: [
    {
      label: 'Default usage',
      code: `
        import { BraidTestProvider } from 'braid-design-system';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <BraidTestProvider>
              ...
            </BraidTestProvider>
          );
        });
      `,
    },
    {
      label: 'Specifying a theme',
      code: `
        import { BraidTestProvider } from 'braid-design-system';
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
      code: `
        import { BraidTestProvider } from 'braid-design-system';
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
