import type { ReactNode } from 'react';
import type { TemplateDocs } from 'site/types';

import { ContainerForPageDocs } from '../../../../components/Page/Page.docs';
import { Strong, Text, TextLink } from '../../../../playroom/components';

import { snippets } from './StandardPage.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      The default starting point for most pages. Uses a{' '}
      <Strong>
        medium <TextLink href="/components/PageBlock">PageBlock</TextLink>
      </Strong>{' '}
      for content width and <Strong>xxlarge</Strong> spacing between sections.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use as your baseline layout for most content pages. The medium{' '}
        <TextLink href="/components/PageBlock">PageBlock</TextLink> and xxlarge
        spacing provide a comfortable reading experience suited to the majority
        of use cases.
      </Text>
      <Text>
        Opt for <Strong>Compact Page</Strong> when information density needs to
        be optimised, or{' '}
        <TextLink href="/templates/spacious-page">Spacious Page</TextLink> for
        landing pages and larger-form content where generous breathing room is
        desired.
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
