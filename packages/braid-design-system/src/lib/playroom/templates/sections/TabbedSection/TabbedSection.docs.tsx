import type { TemplateDocs } from 'site/types';

import { Text, TextLink } from '../../../components';

import { snippets } from './TabbedSection.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A tabbed content layout that organises related content into switchable
      panels within a shared section container.
    </Text>
  ),
  usage: (
    <Text>
      Use when content can be naturally grouped into distinct categories that
      users need to switch between — such as different views of related data or
      alternative task paths. Avoid tabs when all content should be visible
      simultaneously; consider a{' '}
      <TextLink href="/templates/standard-section">Standard Section</TextLink>{' '}
      stack instead.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
