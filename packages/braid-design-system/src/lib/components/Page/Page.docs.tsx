import source from '@braid-design-system/source.macro';
import { calc } from '@vanilla-extract/css-utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ReactNode } from 'react';
import type { ComponentDocs } from 'site/types';

import { Box, Notice, Stack, Strong, Text, TextLink, Tiles } from '..';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { Page } from './Page';

import { heightLimit } from './Page.css';
import { vars } from '../../themes/vars.css';

const ScreenOverlay = ({ screenHeight }: { screenHeight: number }) => (
  <Box
    boxShadow="borderNeutralLarge"
    borderRadius="standard"
    position="absolute"
    top={0}
    left={0}
    right={0}
    zIndex={1}
    pointerEvents="none"
    style={{
      height: screenHeight,
    }}
  />
);

const screenBorderWidth = vars.borderWidth.large;
export const ContainerForPageDocs = ({
  children,
  screenHeight = 350,
}: {
  children: ReactNode;
  screenHeight?: number;
}) => (
  <Box display="flex" justifyContent="center">
    <Box
      position="relative"
      width="full"
      background="surface"
      style={{
        ...assignInlineVars({
          [heightLimit]: calc(screenHeight)
            .multiply('1px')
            .subtract(calc(screenBorderWidth).multiply('2'))
            .toString(),
        }),
        maxWidth: screenHeight * 1.6,
      }}
    >
      <ScreenOverlay screenHeight={screenHeight} />
      <Box style={{ padding: screenBorderWidth }}>{children}</Box>
    </Box>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () => {
    const { code, value } = source(
      <Page footer={<Placeholder label="Footer" height={100} />}>
        <Placeholder label="Header" height={30} />
        <Placeholder label="Content" height={50} />
      </Page>,
    );
    return {
      code,
      value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
    };
  },
  alternatives: [],
  additional: [
    {
      label: 'Establishing a top-level layout',
      description: (
        <>
          <Text>
            For pages with a limited amount of content, typically the footer
            would stack below the content — sitting unexpectedly high within the
            page.
          </Text>
          <Text>
            The <Strong>Page</Strong> component provides a simple way to
            establish a more predictable layout — at a minimum placing the
            footer at the bottom of the screen, pushed beyond as the page
            content grows.
          </Text>
        </>
      ),
      code: false,
      Example: () =>
        source(
          <Tiles space={{ mobile: 'medium', tablet: 'xlarge' }} columns={2}>
            <Stack space="medium">
              <Text size="small" tone="secondary">
                WITHOUT <Strong>PAGE</Strong>
              </Text>

              <ContainerForPageDocs>
                <Placeholder label="Header" height={50} />
                <Placeholder label="Content" height={50} />
                <Box background="criticalLight">
                  <Placeholder label="Footer" height={100} />
                </Box>
              </ContainerForPageDocs>
            </Stack>

            <Stack space="medium">
              <Text size="small" tone="secondary">
                WITH <Strong>PAGE</Strong>
              </Text>
              <ContainerForPageDocs>
                <Page
                  footer={
                    <Box background="positiveLight">
                      <Placeholder label="Footer" height={100} />
                    </Box>
                  }
                >
                  <Placeholder label="Header" height={50} />
                  <Placeholder label="Content" height={50} />
                </Page>
              </ContainerForPageDocs>
            </Stack>
          </Tiles>,
        ),
    },
    {
      label: 'Controlling the footer position',
      description: (
        <>
          <Text>
            For pages with dynamic content, it is recommended to place the
            footer out of view by setting the <Strong>footerPosition</Strong>{' '}
            prop to <Strong>belowFold</Strong>. This prevents the footer from
            popping in and out of view when the page content changes, e.g.
            toggling between a loading indicator and content.
          </Text>
          <Notice tone="promote">
            <Text>
              Placing the footer below the fold can help optimise{' '}
              <TextLink href="https://web.dev/vitals/">Web Vital</TextLink>{' '}
              metrics by stabilising the page throughout a user journey —
              leading to improved{' '}
              <TextLink href="https://web.dev/cls/">
                Cumulative Layout Shift (CLS)
              </TextLink>{' '}
              scores.
            </Text>
          </Notice>
        </>
      ),
      Container: ContainerForPageDocs,
      Example: () =>
        source(
          <Page
            footer={
              <Box background="promoteLight">
                <Placeholder label="Footer" height={100} />
              </Box>
            }
            footerPosition="belowFold"
          >
            <Placeholder label="Header" height={50} />
            <Placeholder label="Content" height={150} />
          </Page>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Page
          data={{ testid: 'page-1' }}
          // => data-testid="page-1"
        >
          ...
        </Page>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
