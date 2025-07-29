import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Link, Text, TextLink } from '..';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <Link href="#">
        <Placeholder
          label="This placeholder is a link"
          width="300"
          height="100"
        />
      </Link>,
    ),
  alternatives: [
    { name: 'TextLink', description: 'For visually styled text links.' },
  ],
  additional: [
    {
      label: 'Development considerations',
      description: (
        <Text>
          Renders a plain `a` tag without any visual styling, or the custom
          `linkComponent` implementation that was provided via{' '}
          <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
        </Text>
      ),
    },
    dataAttributeDocs({
      code: `
        <Link
          data={{ testid: 'link-1' }}
          // => data-testid="link-1"
        >
          ...
        </Link>
      `,
      supportsNativeSyntax: true,
      componentName: 'Link',
    }),
  ],
};

export default docs;
