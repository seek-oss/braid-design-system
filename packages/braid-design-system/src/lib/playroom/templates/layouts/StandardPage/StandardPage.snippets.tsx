import source from '@braid-design-system/source.macro';
import type { ReactNode } from 'react';

import { ContainerForPageDocs } from '../../../../components/Page/Page.docs';
import type { Snippets } from '../../../../components/private/Snippets';
import {
  Placeholder,
  Heading,
  Page,
  PageBlock,
  Stack,
  Strong,
  Text,
  PlaceholderFooter,
  PlaceholderHeader,
} from '../../../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <ContainerForPageDocs screenHeight={500}>{children}</ContainerForPageDocs>
);

export const snippets: Snippets = [
  {
    group: 'Layouts',
    name: 'Standard Page',
    code: source(
      <Page footer={<PlaceholderFooter />} footerPosition="belowFold">
        <Stack space="xxlarge">
          <PlaceholderHeader />

          <PageBlock width="medium">
            <Stack space="medium">
              <Heading level="2">Standard Page</Heading>

              <Text>
                Combines a <Strong>Heading level 2</Strong> with{' '}
                <Strong>xxlarge Stack</Strong> spacing between sections, where
                each section uses a <Strong>medium PageBlock</Strong> to
                establish content max width and consistent screen gutters.
              </Text>

              <Text>
                If providing text immediately below the Heading, consider using{' '}
                <Strong>standard Text</Strong> and grouping with a{' '}
                <Strong>medium Stack</Strong>.
              </Text>

              <Text>Use this layout as a starting point.</Text>
            </Stack>
          </PageBlock>

          <PageBlock width="medium">
            <Placeholder label="Section" height={300} />
          </PageBlock>

          <PageBlock width="medium">
            <Placeholder label="Section" height={250} />
          </PageBlock>

          <PageBlock width="medium">
            <Placeholder label="Section" height={400} />
          </PageBlock>
        </Stack>
      </Page>,
    ),
    Container,
  },
];
