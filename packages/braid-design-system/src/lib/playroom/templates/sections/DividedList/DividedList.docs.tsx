import type { TemplateDocs } from 'site/types';

import { Text } from '../../../../playroom/components';

import { snippets } from './DividedList.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A compact list layout using dividers to separate items, pairing a title
      and description with an optional inline action per row.
    </Text>
  ),
  usage: (
    <Text>
      Use for dense item lists where visual separation is needed without the
      overhead of cards. For richer item presentations, consider the{' '}
      <strong>Card list</strong> section instead.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
