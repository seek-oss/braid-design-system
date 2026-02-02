import source from '@braid-design-system/source.macro';

import {
  Page,
  PlaceholderFooter,
  PlaceholderHeader,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

import { ContainerForPageDocs } from './Page.docs';

const defaultSnippetSource = source(
  <Page footer={<PlaceholderFooter />}>
    <PlaceholderHeader />
  </Page>,
);

const belowFoldSnippetSource = source(
  <Page footer={<PlaceholderFooter />} footerPosition="belowFold">
    <PlaceholderHeader />
  </Page>,
);

export const snippets: Snippets = [
  {
    name: 'Default',
    code: {
      code: defaultSnippetSource.code,
      value: (
        <ContainerForPageDocs screenHeight={500}>
          {defaultSnippetSource.value}
        </ContainerForPageDocs>
      ),
    },
  },
  {
    name: 'Footer below fold',
    code: {
      code: belowFoldSnippetSource.code,
      value: (
        <ContainerForPageDocs screenHeight={500}>
          {belowFoldSnippetSource.value}
        </ContainerForPageDocs>
      ),
    },
  },
];
