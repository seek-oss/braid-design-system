import type { TemplateDocs } from 'site/types';

import { Text } from '../../../../playroom/components';

import { snippets } from './CardList.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A section pattern for displaying a list of items as cards, providing
      visual separation and a consistent structure for each item.
    </Text>
  ),
  usage: (
    <Text>
      Use when displaying a collection of similar items — such as search results
      or records — that benefit from defined visual boundaries. For lightweight
      lists without card treatment, consider the <strong>Divided list</strong>{' '}
      section instead.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
