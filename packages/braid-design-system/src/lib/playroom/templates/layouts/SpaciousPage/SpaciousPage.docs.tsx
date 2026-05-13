import type { ReactNode } from 'react';
import type { TemplateDocs } from 'site/types';

import { ContainerForPageDocs } from '../../../../components/Page/Page.docs';
import { Strong, Text, TextLink } from '../../../../playroom/components';

import { snippets } from './SpaciousPage.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A generous layout using large spacing and a wider content block, suited to
      surfaces where white space aids comprehension. Uses a{' '}
      <Strong>
        large <TextLink href="/components/PageBlock">PageBlock</TextLink>
      </Strong>{' '}
      and <Strong>xxxlarge</Strong> spacing between sections.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use for landing pages, marketing surfaces, and larger-form content where
        a premium feel or generous breathing room is desired.
      </Text>
      <Text>
        For standard content pages, prefer{' '}
        <TextLink href="/templates/standard-page">Standard Page</TextLink>. For
        dense, task-focused interfaces, prefer{' '}
        <TextLink href="/templates/compact-page">Compact Page</TextLink>.
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
