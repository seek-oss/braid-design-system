import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Strong, Text, TextLink } from '../';

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
    {
      label: 'Data attributes',
      description: (
        <>
          <Text>
            Braid components are very explicit about the properties they accept,
            which makes providing arbitrary{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
              data attributes
            </TextLink>{' '}
            not possible. Instead, all Braid components accept a{' '}
            <Strong>data</Strong> prop, allowing a single collection of data
            attributes to be provided.
          </Text>
        </>
      ),
      code: `
        <Strong
          data={{ testid: 'strong-1' }}
          // => data-testid="strong-1"
        >
          ...
        </Strong>
      `,
    },
  ],
};

export default docs;
