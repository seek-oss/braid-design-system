import type { TemplateDocs } from 'site/types';

import { Text, TextLink } from '../../../components';

import { snippets } from './TableSection.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A section containing tabular data within a medium{' '}
      <TextLink href="/components/PageBlock">PageBlock</TextLink>, with support
      for status badges and per-row overflow actions.
    </Text>
  ),
  usage: (
    <Text>
      Use for structured data that benefits from a tabular layout — comparison
      tables, data records, or any content where rows and columns aid
      comprehension.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
