import type { ReactNode } from 'react';
import type { TemplateDocs } from 'site/types';

import { ContainerForPageDocs } from '../../../../components/Page/Page.docs';
import { Strong, Text } from '../../../../playroom/components';

import { snippets } from './CompactPage.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      An information-dense layout with tighter spacing, suitable when users are
      familiar with the content and hierarchy is well-established. Uses a{' '}
      <Strong>medium PageBlock</Strong> and <Strong>xlarge</Strong> spacing
      between sections.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use where information density needs to be optimised — dashboards,
        data-heavy pages, or contexts where users are expected to scan content
        quickly.
      </Text>
      <Text>
        If a more relaxed reading experience is needed, consider{' '}
        <Strong>Standard Page</Strong> instead.
      </Text>
    </>
  ),
  Container: ({ children }: { children: ReactNode }) => (
    <ContainerForPageDocs screenHeight={500} hideOverflow>
      {children}
    </ContainerForPageDocs>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
