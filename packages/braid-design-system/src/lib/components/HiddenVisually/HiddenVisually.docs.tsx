import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { HiddenVisually, Strong, Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Text>
        The next sentence is only available to screen readers.
        <HiddenVisually> Hello world.</HiddenVisually>
      </Text>,
    ),
  alternatives: [{ name: 'Hidden', description: 'For hiding content.' }],
  accessibility: (
    <Text>
      Provides content to assistive technologies while hiding it from the
      screen.
    </Text>
  ),
  additional: [
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
        <HiddenVisually
          data={{ testid: 'hidden-visually-1' }}
          // => data-testid="hidden-visually-1"
        >
          ...
        </HiddenVisually>
      `,
    },
  ],
};

export default docs;
