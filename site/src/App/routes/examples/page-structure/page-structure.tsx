import React, { type ComponentProps, type ReactElement } from 'react';
import type { Page as PageType } from '../../../../types';
import {
  Heading,
  Text,
  Divider,
  Stack,
  TextLink,
  List,
  Page,
  Box,
  Strong,
  Inline,
} from 'braid-src/lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import { Placeholder } from 'braid-src/lib/playroom/components';
import Code from '../../../Code/Code';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import { PageTitle } from '../../../Seo/PageTitle';
import { LinkableHeading } from '../../../LinkableHeading/LinkableHeading';
import { ContainerForPageDocs } from 'braid-src/lib/components/Page/Page.docs';
import source from 'braid-design-system/src/lib/utils/source.macro';

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ComponentProps<typeof Code>['children'];
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="xlarge">
    {heading ? <LinkableHeading level="3">{heading}</LinkableHeading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);
const widths = {
  medium: '60%',
  large: '85%',
};
const PageBlock = ({
  width,
  children,
}: {
  width: keyof typeof widths;
  children: ReactElement;
}) => (
  <Box style={{ maxWidth: widths[width], margin: '0 auto' }}>{children}</Box>
);

type PageDensity = 'tight' | 'loose';
const scaledSpace: Record<PageDensity, ComponentProps<typeof Stack>['space']> =
  {
    tight: 'xxlarge',
    loose: 'xxxlarge',
  };
const scaledHeading: Record<
  PageDensity,
  ComponentProps<typeof Heading>['level']
> = {
  tight: '2',
  loose: '1',
};

const scaleExamples = ({
  code,
  density,
}: {
  code: string;
  density: PageDensity;
}) => {
  let newCode = code
    // Increase Stack space to recommended value from `scaledSpace` above
    .replace(/(space=\")\w+([\"])/, `$1${scaledSpace[density]}$2`)
    // Replace Text component with real Heading component
    .replace(/Text/g, 'Heading')
    // Remove now irrelevant `size` prop (and leading space)
    .replace(/\ssize=\".+\"/, '')
    // Replace now irrelevant `weight` value with recommended value from `scaledHeading` above
    .replace('weight="strong"', `level="${scaledHeading[density]}"`);

  // Find Placeholders with height props and double them for non-docs site usage
  const placeholderHeights = newCode.matchAll(/height={(\d+)}/g);
  let item = placeholderHeights.next();

  while (item.done === false) {
    const { 1: height, index } = item.value;

    newCode = [
      // Code before Placeholder height match
      newCode.slice(0, index),
      // Double the height only in matches that are not already doubled
      newCode.slice(index).replace(height, String(parseInt(height, 10) * 2)),
    ].join('');

    item = placeholderHeights.next();
  }

  return newCode;
};

const page: PageType = {
  title: 'Page Structure',
  badge: 'New',
  element: (
    <TextStack>
      <Stack space="medium">
        <Heading level="3" weight="weak">
          <PageTitle title="Page Structure Example" />
          Examples /
        </Heading>
        <Heading component="h1" level="2">
          Page Structure
        </Heading>
      </Stack>

      <Code collapsedByDefault>
        {() => {
          const { code, value } = source(
            <Page
              footer={<Placeholder label="Footer" height={100} />}
              footerPosition="belowFold"
            >
              <Stack space="large">
                <Placeholder label="Header" height={40} />

                <PageBlock width="large">
                  <Text weight="strong">Page Heading</Text>
                </PageBlock>

                <PageBlock width="large">
                  <Placeholder label="Section" height={50} />
                </PageBlock>

                <PageBlock width="large">
                  <Placeholder label="Section" height={50} />
                </PageBlock>
              </Stack>
            </Page>,
          );

          return {
            code: scaleExamples({
              code,
              density: 'loose',
            }),
            value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
          };
        }}
      </Code>

      <Heading level="3">How do I build this example for myself?</Heading>

      <Text>
        Designs like this are rarely built top-to-bottom in a single pass.
        Instead, they typically start very simple, with further details and
        refinements added in layers.
      </Text>
      <Text>
        To give you a sense of what this looks like, the following tutorial will
        guide you through the design process that you might go through when
        using <TextLink href="/playroom">Playroom</TextLink>.
      </Text>

      <Text tone="secondary">
        At any stage you can click the &ldquo;Open in Playroom&rdquo; button
        under the examples to view the design across themes and viewports.
      </Text>

      <Divider />

      <Stack space="xxlarge">
        <Step
          heading="1. Laying out a new page"
          detail={
            <Text>
              To get started, we&rsquo;ll use a{' '}
              <TextLink href="/components/Page">Page</TextLink> component to
              establish the top-level layout. We will pass a{' '}
              <Strong>Placeholder</Strong> to use in the <Strong>footer</Strong>{' '}
              slot, which ensures that the footer is at least placed at the
              bottom of the screen, if not beyond as the page content grows.
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page footer={<Placeholder label="Footer" height={100} />}>
                <Placeholder label="Header" height={40} />
              </Page>,
            );
            return {
              code,
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </Step>

        <Step
          heading="2. Footer positioning"
          detail={
            <Text>
              For pages with dynamic content, it is recommended to place the
              footer out of view by setting the <Strong>footerPosition</Strong>{' '}
              prop to <Strong>belowFold</Strong>. This prevents the footer from
              popping in and out of view when the page content changes, e.g.
              toggling between a loading indicator and content.
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={100} />}
                footerPosition="belowFold"
              >
                <Placeholder label="Header" height={40} />
              </Page>,
            );
            return {
              code,
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </Step>

        <Step
          heading="3. Adding content"
          detail={
            <Text>
              Now let&rsquo;s add a page title using the{' '}
              <TextLink href="/components/Heading">Heading</TextLink> component,
              as well as some additional{' '}
              <TextLink href="/guides/playroom-prototyping#placeholder">
                Placeholders
              </TextLink>{' '}
              to demonstrate the sections of our page.
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={100} />}
                footerPosition="belowFold"
              >
                <Placeholder label="Header" height={40} />

                <Text weight="strong">Page Heading</Text>

                <Placeholder label="Section" height={50} />

                <Placeholder label="Section" height={50} />
              </Page>,
            );
            return {
              code: scaleExamples({
                code,
                density: 'loose',
              }),
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </Step>

        <Step
          heading="3. Adjusting the content density"
          detail={
            <>
              <Text>
                You&rsquo;ll notice that there is no space between the content.
                This is actually a good thing! We now get to consider the
                density of our page and adjust the spacing accordingly. To
                achieve this, we&rsquo;ll use a{' '}
                <TextLink href="/components/Stack">Stack</TextLink> component
                which applies space evenly between its child elements.
              </Text>
              <Text>
                The specified heading level of the page title is a good guide
                for determining how much <Strong>space</Strong> to use — if
                using a heading level 1 consider using <Strong>xxxlarge</Strong>
                , if using a heading level 2 consider using{' '}
                <Strong>xxlarge</Strong>.
              </Text>
            </>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={100} />}
                footerPosition="belowFold"
              >
                <Stack space="large">
                  <Placeholder label="Header" height={40} />

                  <Text weight="strong">Page Heading</Text>

                  <Placeholder label="Section" height={50} />

                  <Placeholder label="Section" height={50} />
                </Stack>
              </Page>,
            );

            return {
              code: scaleExamples({
                code,
                density: 'loose',
              }),
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </Step>

        <Step
          heading="4. Limiting the content width"
          detail={
            <Text>
              With the vertical space now handled, we can now turn our attention
              to the content width and establish consistent responsive gutters
              to the edge of the screen. For this we will use the{' '}
              <TextLink href="/components/PageBlock">PageBlock</TextLink>{' '}
              component, providing a centered block for the content with a
              choice of max width.
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={100} />}
                footerPosition="belowFold"
              >
                <Stack space="large">
                  <Placeholder label="Header" height={40} />

                  <PageBlock width="large">
                    <Text weight="strong">Page Heading</Text>
                  </PageBlock>

                  <PageBlock width="large">
                    <Placeholder label="Section" height={50} />
                  </PageBlock>

                  <PageBlock width="large">
                    <Placeholder label="Section" height={50} />
                  </PageBlock>
                </Stack>
              </Page>,
            );

            return {
              code: scaleExamples({
                code,
                density: 'loose',
              }),
              value: (
                <Inline space="xlarge" align="center">
                  <Box style={{ width: 180 }}>
                    <Stack space="xsmall">
                      <Text size="xsmall" tone="secondary">
                        MOBILE
                      </Text>
                      <ContainerForPageDocs>{value}</ContainerForPageDocs>
                    </Stack>
                  </Box>

                  <Box style={{ width: 500, maxWidth: '100%' }}>
                    <Stack space="xsmall">
                      <Text size="xsmall" tone="secondary">
                        DESKTOP
                      </Text>
                      <Box width="full">
                        <ContainerForPageDocs>{value}</ContainerForPageDocs>
                      </Box>
                    </Stack>
                  </Box>
                </Inline>
              ),
            };
          }}
        </Step>
      </Stack>

      <Divider />

      <TextStack>
        <LinkableHeading level="3">Next steps</LinkableHeading>

        <Stack space="xlarge">
          <Text>
            Now that you are familiar with the code we have just written, this
            is a good chance to head over to Playroom and continue refining this
            design.
          </Text>
          <Text>You may want to consider:</Text>
          <List>
            <Text>
              Grouping page sections by adjusting their surrounding space
            </Text>
            <Text>Adding a full bleed coloured box</Text>
          </List>
        </Stack>
      </TextStack>
    </TextStack>
  ),
};

export default page;
