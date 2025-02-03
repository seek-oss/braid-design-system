import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Link, Notice, Strong, Text, TextLink } from '..';
import { Placeholder } from '../../playroom/components';

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
          <Notice>
            <Text>
              While Link does support the native HTML syntax, it also supports
              the <Strong>data</Strong> prop for consistency.
            </Text>
          </Notice>
        </>
      ),
      code: `
        <Link
          data={{ testid: 'link-1' }}
          // => data-testid="link-1"
        >
          ...
        </Link>
      `,
    },
  ],
};

export default docs;
