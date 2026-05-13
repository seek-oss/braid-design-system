import type { TemplateDocs } from 'site/types';

import { Strong, Text, TextLink } from '../../../../playroom/components';

import { snippets } from './StandardSection.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      The default section layout. A heading-led block using a{' '}
      <Strong>
        medium <TextLink href="/components/Stack">Stack</TextLink>
      </Strong>{' '}
      to group content within a{' '}
      <Strong>
        medium <TextLink href="/components/PageBlock">PageBlock</TextLink>
      </Strong>
      .
    </Text>
  ),
  usage: (
    <Text>
      Use as the default starting point for general page sections. Pair the
      optional subtitle with a <Strong>secondary</Strong> tone to provide
      supporting context without clashing with body content.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
