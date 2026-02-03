import source from '@braid-design-system/source.macro';
import type { ReactNode } from 'react';

import {
  Page,
  PlaceholderFooter,
  PlaceholderHeader,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

import { ContainerForPageDocs } from './Page.docs';

const Container = ({ children }: { children: ReactNode }) => (
  <ContainerForPageDocs screenHeight={500}>{children}</ContainerForPageDocs>
);

export const snippets: Snippets = [
  {
    name: 'Default',
    code: source(
      <Page footer={<PlaceholderFooter />}>
        <PlaceholderHeader />
      </Page>,
    ),
    Container,
  },
  {
    name: 'Footer below fold',
    code: source(
      <Page footer={<PlaceholderFooter />} footerPosition="belowFold">
        <PlaceholderHeader />
      </Page>,
    ),
    Container,
  },
];
