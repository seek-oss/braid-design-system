import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Strong, Text, TextLink } from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Text size="large">
        The last word of this sentence is <Strong>strong.</Strong>
      </Text>,
    ),
  alternatives: [
    { name: 'Secondary', description: 'For a lighter text treatment.' },
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
        <Strong
          data={{ testid: 'strong-1' }}
          // => data-testid="strong-1"
        >
          ...
        </Strong>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
