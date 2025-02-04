import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { HiddenVisually, Text } from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

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
    dataAttributeDocs({
      code: `
        <HiddenVisually
          data={{ testid: 'hidden-visually-1' }}
          // => data-testid="hidden-visually-1"
        >
          ...
        </HiddenVisually>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
