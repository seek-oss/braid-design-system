import React, { type ReactElement } from 'react';
import source from '@braid-design-system/source.macro';
import type { Page as PageType } from '../../../../types';
import {
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
import { LinkableHeading } from '../../../LinkableHeading/LinkableHeading';
import { ContainerForPageDocs } from 'braid-src/lib/components/Page/Page.docs';
import { fullHeight } from 'braid-src/lib/components/Page/Page.css';
import { ExampleIntro, ExampleTitle, ExampleStep } from '../components';

const widths = {
  medium: '300px',
  large: '400px',
};
const ContentBlock = ({
  width,
  children,
}: {
  width: keyof typeof widths;
  children: ReactElement;
}) => (
  <Box style={{ maxWidth: widths[width], margin: '0 auto' }}>{children}</Box>
);
const PageBlock = ({
  width,
  children,
}: {
  width: keyof typeof widths;
  children: ReactElement;
}) => (
  <Box paddingX="xsmall">
    <ContentBlock width={width}>{children}</ContentBlock>
  </Box>
);

const scaleExamples = ({ code }: { code: string }) => {
  let newCode = code
    // Increase Stack space to recommended starting value for page section spacing
    .replace('space="large"', 'space="xxlarge"')
    // Replace Text component with real Heading component
    .replace(/Text/g, 'Heading')
    // Remove now irrelevant `size` prop (and leading space)
    .replace(/\ssize=\".+\"/, '')
    // Replace now irrelevant `weight` value with recommended page title heading level
    .replace('weight="strong"', `level="2"`);

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
      <ExampleTitle title="Page Structure" />

      <Code collapsedByDefault>
        {() => {
          const { code, value } = source(
            <Page
              footer={<Placeholder label="Footer" height={90} />}
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
            code: scaleExamples({ code }),
            value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
          };
        }}
      </Code>

      <ExampleIntro />

      <Divider />

      <Stack space="xxlarge">
        <ExampleStep
          heading="1. Adding initial content"
          detail={
            <Text>
              Let&rsquo;s start by adding some placeholder content to our page —
              a header, a page heading, a couple of content sections and a
              footer.
            </Text>
          }
          conclusion={
            <>
              <Text>
                You&rsquo;ll notice that the footer is sitting unexpectedly high
                — it&rsquo;s half way up the page! This is a common problem when
                laying out a page with limited content. Ideally, the footer
                would sit at least at the bottom of the screen, if not beyond as
                the content grows.
              </Text>
              <Text>Let&rsquo;s address this next.</Text>
            </>
          }
        >
          {() => {
            const { code, value } = source(
              <>
                <Placeholder label="Header" height={40} />
                <Text weight="strong">Page Heading</Text>
                <Placeholder label="Section" height={50} />
                <Placeholder label="Section" height={50} />
                <Placeholder label="Footer" height={90} />
              </>,
            );
            return {
              code: scaleExamples({ code }),
              value: (
                <ContainerForPageDocs>
                  <Box className={fullHeight}>{value}</Box>
                </ContainerForPageDocs>
              ),
            };
          }}
        </ExampleStep>

        <ExampleStep
          heading="2. Establishing a top-level layout"
          detail={
            <>
              <Text>
                Braid provides a{' '}
                <TextLink href="/components/Page">Page</TextLink> component to
                establish a top-level layout. All that is required, is to wrap
                it around the content, and pass the footer to the{' '}
                <Strong>footer</Strong> property.
              </Text>
              <Text>
                This will ensure that the footer is at least placed at the
                bottom of the screen, if not beyond as the page content grows.
              </Text>
            </>
          }
        >
          {() => {
            const { code, value } = source(
              <Page footer={<Placeholder label="Footer" height={90} />}>
                <Placeholder label="Header" height={40} />
                <Text weight="strong">Page Heading</Text>
                <Placeholder label="Section" height={50} />
                <Placeholder label="Section" height={50} />
              </Page>,
            );
            return {
              code: scaleExamples({ code }),
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </ExampleStep>

        <ExampleStep
          heading="2. Footer positioning"
          detail={
            <>
              <Text>
                If your page has dynamic content, such as search results that
                change when filtered, it is recommended to place the footer out
                of view permanently to prevent it from popping in and out of
                view when the results change.
              </Text>
              <Text>
                We do this by setting the <Strong>footerPosition</Strong> to{' '}
                <Strong>belowFold</Strong>.
              </Text>
            </>
          }
          conclusion={
            <Text>
              With the footer position decided, we now can turn our attention
              back to the content, which is in need of some space — the question
              is how much?
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={90} />}
                footerPosition="belowFold"
              >
                <Placeholder label="Header" height={40} />
                <Text weight="strong">Page Heading</Text>
                <Placeholder label="Section" height={50} />
                <Placeholder label="Section" height={50} />
              </Page>,
            );
            return {
              code: scaleExamples({ code }),
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </ExampleStep>

        <ExampleStep
          heading="3. Adjusting the content density"
          detail={
            <>
              <Text>
                To adjust vertical spacing we&rsquo;ll use the{' '}
                <TextLink href="/components/Stack">Stack</TextLink> component,
                which applies space evenly between the elements contained within
                it. Wrapping our content in this way, allows the vertical rhythm
                between sections to be controlled consistently by specifying a{' '}
                <Strong>space</Strong> value.
              </Text>
              <Text>
                The amount of space will ultimately depend on the desired
                density of content being laid out. A good starting point for
                page sections is <Strong>xxlarge</Strong>, stepping up to{' '}
                <Strong>xxxlarge</Strong> for larger, content heavy areas (such
                as dashboards or column layouts) that may require more vertical
                separation to delineate sections.
              </Text>
            </>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={90} />}
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
              code: scaleExamples({ code }),
              value: <ContainerForPageDocs>{value}</ContainerForPageDocs>,
            };
          }}
        </ExampleStep>

        <ExampleStep
          heading="4. Limiting the content width"
          detail={
            <>
              <Text>
                With vertical space now handled, let&rsquo;s focus on the
                content width. We can use the{' '}
                <TextLink href="/components/ContentBlock">
                  ContentBlock
                </TextLink>{' '}
                component, which will provide a centered block for our content
                with a choice of maximum width.
              </Text>

              <Text>
                Choose the <Strong>width</Strong> based on the content and its
                layout. Are you using a column layout? What is the maximum line
                length of the content? For this example we will use{' '}
                <Strong>large</Strong>.
              </Text>

              <Text>
                Wrapping each section separately enables having different max
                widths, or highlighting in a container with a background colour.
              </Text>
            </>
          }
          conclusion={
            <>
              <Text>
                We are pretty close now. You may notice however, that the
                content is touching the edge of the screen in the mobile
                preview. This occurs when the maximum width of the content width
                is greater than the screen width.
              </Text>

              <Text>Let&rsquo;s establish some screen gutters next.</Text>
            </>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={90} />}
                footerPosition="belowFold"
              >
                <Stack space="large">
                  <Placeholder label="Header" height={40} />

                  <ContentBlock width="large">
                    <Text weight="strong">Page Heading</Text>
                  </ContentBlock>

                  <ContentBlock width="large">
                    <Placeholder label="Section" height={50} />
                  </ContentBlock>

                  <ContentBlock width="large">
                    <Placeholder label="Section" height={50} />
                  </ContentBlock>
                </Stack>
              </Page>,
            );

            return {
              code: scaleExamples({ code }),
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
        </ExampleStep>

        <ExampleStep
          heading="5. Applying consistent screen gutters"
          detail={
            <>
              <Text>
                While a ContentBlock is great fot constraining content width
                within containers that already have their own padding, for
                top-level containers we want to establish consistent gutters
                between the content and the edge of the screen. For this Braid
                provides the{' '}
                <TextLink href="/components/PageBlock">PageBlock</TextLink>{' '}
                component, recommended in favour of ContentBlock for top-level
                page sections.
              </Text>

              <Text>
                Let&rsquo;s go ahead and replace our usage of{' '}
                <Strong>&ldquo;ContentBlock&rdquo;</Strong> with{' '}
                <Strong>&ldquo;PageBlock&rdquo;</Strong>.
              </Text>
            </>
          }
          conclusion={
            <Text>
              And that&rsquo;s it! We have successfully established our
              top-level page structure.
            </Text>
          }
        >
          {() => {
            const { code, value } = source(
              <Page
                footer={<Placeholder label="Footer" height={90} />}
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
              code: scaleExamples({ code }),
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
        </ExampleStep>
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
            <Text>Adding additional content to the page sections</Text>
            <Text>Adding a full bleed coloured container to a section</Text>
          </List>
        </Stack>
      </TextStack>
    </TextStack>
  ),
};

export default page;
