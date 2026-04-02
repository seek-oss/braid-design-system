import type { TemplateDocs } from 'site/types';

import { Strong, Text } from '../../../../playroom/components';

import { snippets } from './StandardSection.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      The default section layout. A heading-led block using a{' '}
      <Strong>medium Stack</Strong> to group content within a{' '}
      <Strong>medium PageBlock</Strong>.
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
