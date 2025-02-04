import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Secondary, Text, TextLink } from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Text size="large">
        The last word of this sentence is <Secondary>secondary.</Secondary>
      </Text>,
    ),
  alternatives: [
    { name: 'Strong', description: 'For a stronger text treatment.' },
  ],
  additional: [
    {
      label: 'Note',
      description: (
        <Text>
          This component must be nested within a{' '}
          <TextLink href="/components/Text">Text</TextLink> or{' '}
          <TextLink href="/components/Heading">Heading</TextLink> component.
        </Text>
      ),
    },
    dataAttributeDocs({
      code: `
        <Secondary
          data={{ testid: 'secondary-1' }}
          // => data-testid="secondary-1"
        >
          ...
        </Secondary>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
