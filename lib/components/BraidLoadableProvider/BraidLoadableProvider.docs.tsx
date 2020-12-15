import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text, TextLink } from '..';
import { Strong } from '../Strong/Strong';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Text>
      Alternative to{' '}
      <TextLink href="/components/BraidProvider">BraidProvider</TextLink> with
      support for multiple themes.
    </Text>
  ),
  alternatives: [
    {
      name: 'BraidProvider',
      description: 'For production apps with a single theme.',
    },
    {
      name: 'BraidTestProvider',
      description: 'For test environments.',
    },
  ],
  additional: [
    {
      label: 'Specifying a theme',
      description: (
        <Text>
          Providing a <Strong>themeName</Strong> will resolve to a{' '}
          <TextLink href="/components/BraidProvider">BraidProvider</TextLink>{' '}
          dynamically. Useful for applications building for multiple themes.
        </Text>
      ),
      code: `
        import { BraidLoadableProvider } from 'braid-design-system';

        export default () => (
          <BraidLoadableProvider themeName="wireframe">
            ...
          </BraidLoadableProvider>
        );
      `,
    },
  ],
};

export default docs;
