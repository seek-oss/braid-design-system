import type { ReactNode } from 'react';
import type { TemplateDocs } from 'site/types';

import { ContainerForPageDocs } from '../../../../components/Page/Page.docs';
import { Strong, Text } from '../../../../playroom/components';

import { snippets } from './SpaciousPage.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A generous layout using large spacing and a wider content block, suited to
      surfaces where white space aids comprehension. Uses a{' '}
      <Strong>large PageBlock</Strong> and <Strong>xxxlarge</Strong> spacing
      between sections.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use for landing pages, marketing surfaces, and larger-form content where
        a premium feel or generous breathing room is desired.
      </Text>
      <Text>
        For standard content pages, prefer <Strong>Standard Page</Strong>. For
        dense, task-focused interfaces, prefer <Strong>Compact Page</Strong>.
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
