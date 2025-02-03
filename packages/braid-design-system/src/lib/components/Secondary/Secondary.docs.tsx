import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Secondary, Strong, Text, TextLink } from '../';

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
        <Secondary
          data={{ testid: 'secondary-1' }}
          // => data-testid="secondary-1"
        >
          ...
        </Secondary>
      `,
    },
  ],
};

export default docs;
