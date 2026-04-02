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
    name: 'Spacious Page',
    code: source(
      <Page footer={<PlaceholderFooter />} footerPosition="belowFold">
        <Stack space="xxxlarge">
          <PlaceholderHeader />

          <PageBlock width="large">
            <Stack space="large">
              <Heading level="1">Spacious Page</Heading>

              <Text size="large">
                Combines a <Strong>Heading level 1</Strong> with{' '}
                <Strong>xxxlarge Stack</Strong> spacing between sections, where
                each section uses a <Strong>large PageBlock</Strong> to
                establish content max width and consistent screen gutters.
              </Text>

              <Text size="large">
                If providing text immediately below the Heading, consider using{' '}
                <Strong>large Text</Strong> and grouping with a{' '}
                <Strong>large Stack</Strong>.
              </Text>

              <Text size="large">
                Use this layout for landing pages and larger form content.
              </Text>
            </Stack>
          </PageBlock>

          <PageBlock width="large">
            <Placeholder label="Section" height={300} />
          </PageBlock>

          <PageBlock width="large">
            <Placeholder label="Section" height={250} />
          </PageBlock>

          <PageBlock width="large">
            <Placeholder label="Section" height={400} />
          </PageBlock>
        </Stack>
      </Page>,
    ),
    Container,
  },
];
