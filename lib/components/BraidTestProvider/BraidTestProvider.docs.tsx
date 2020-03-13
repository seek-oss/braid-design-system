import React from 'react';
import { seekAnz } from '../../themes';
import { ComponentDocs } from '../../../site/src/types';
import { Stack, Text } from '..';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Stack space="large">
      <Text>Alternative to `BraidProvider` for unit test environments.</Text>
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
  ],
};

export default docs;
