import React, { ReactChild } from 'react';
import { Page } from '../../../../types';
import {
  Heading,
  Text,
  Divider,
  Stack,
  Columns,
  Column,
  Inline,
  TextLink,
  List,
  Box,
  ContentBlock,
  Button,
} from '../../../../../../lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import { Placeholder } from '../../../../../../lib/playroom/components';
import Code from '../../../Code/Code';
import { ReactNodeNoStrings } from '../../../../../../lib/components/private/ReactNodeNoStrings';
import { PageTitle } from '../../../Seo/PageTitle';
import source from '../../../../../../lib/utils/source.macro';

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ReactChild;
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="xlarge">
    {heading ? <Heading level="3">{heading}</Heading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);

const page: Page = {
  title: 'Marketing Banner',
  component: () => (
    <TextStack>
      <Stack space="medium">
        <Heading level="3" weight="weak">
          <PageTitle title="Marketing Banner Example" />
          Examples /
        </Heading>
        <Heading component="h1" level="2">
          Marketing Banner
        </Heading>
      </Stack>

      <Code collapsedByDefault>
        {source(
          <Box
            background="brandAccent"
            paddingX="small"
            paddingY={{ mobile: 'xlarge', tablet: 'xxlarge' }}
          >
            <ContentBlock>
              <Columns
                space={{ mobile: 'xlarge', tablet: 'gutter' }}
                collapseBelow="tablet"
                alignY="center"
              >
                <Column width="3/5">
                  <Stack space="large">
                    <Heading
                      level="1"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      Heard about our latest marketing campaign?
                    </Heading>
                    <Inline
                      space="none"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      <Button variant="ghost" tone="neutral">
                        Show me
                      </Button>
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <Placeholder height={300} label="Marketing illustration" />
                </Column>
              </Columns>
            </ContentBlock>
          </Box>,
        )}
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

      <Stack space="xlarge">
        <Step
          heading="1. Create the container and basic content"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Adding the basic content up front is a great place to start,
                allowing us to consider the hierarchy of information as we
                iterate. We&rsquo;ll nest the content inside a{' '}
                <TextLink href="/components/Box">Box</TextLink>, and add in the{' '}
                <TextLink href="/components/Heading">Heading</TextLink>,{' '}
                <TextLink href="/components/Button">Button</TextLink> and a
                `Placeholder` for a marketing illustration.
              </Text>
              <Text component="p">
                A `Placeholder` is only available in Playroom to support the
                prototyping workflow and allows you to provide a `height`,
                `width` and optional `label`.
              </Text>
              <Text component="p">
                Let&rsquo;s give the `Placeholder` a `height` of
                &ldquo;300&rdquo; and a `label` of &ldquo;Marketing
                illustration&rdquo; to describe the purpose of reserving this
                space.
              </Text>
            </Stack>
          }
        >
          <Box>
            <Heading level="1">
              Heard about our latest marketing campaign?
            </Heading>
            <Button>Show me</Button>
            <Placeholder height={300} label="Marketing illustration" />
          </Box>
        </Step>

        <Step
          heading="2. Lay out the content"
          detail={
            <Stack space="xlarge">
              <Text>
                At a high level, we can observe that this layout is being
                achieved using a{' '}
                <TextLink href="/components/Columns">Columns</TextLink> layout.
                Some key attributes to note:
              </Text>
              <List>
                <Text>Number of columns—in this case 2,</Text>
                <Text>
                  Space between the columns—in this case &ldquo;gutter&rdquo;
                </Text>
                <Text>
                  First column is wider—in this case &ldquo;3/5&rdquo;
                </Text>
              </List>
            </Stack>
          }
        >
          <Columns space="gutter">
            <Column width="3/5">
              <Placeholder height={300} />
            </Column>
            <Column>
              <Placeholder height={300} />
            </Column>
          </Columns>
        </Step>

        <Step
          detail={
            <Text>
              We can go ahead and add this layout into our `Box` and populate
              the columns with the content from step 1.
            </Text>
          }
        >
          <Box>
            <Columns space="gutter">
              <Column width="3/5">
                <Heading level="1">
                  Heard about our latest marketing campaign?
                </Heading>
                <Button>Show me</Button>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Step
          heading="3. Space out the content"
          detail={
            <Text>
              As in previous examples, you&rsquo;ll notice that there is no
              space between the heading and button by default. So we&rsquo;ll
              wrap them in a <TextLink href="/components/Stack">Stack</TextLink>{' '}
              component, specifying &ldquo;large&rdquo; space.
            </Text>
          }
        >
          <Box>
            <Columns space="gutter">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Button>Show me</Button>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Step
          detail={
            <Text>
              In terms of spacing, we can also observe that the columns are
              vertically aligned to the center. We can achieve this using
              setting `alignY` to &ldquo;center&rdquo; on `Columns`.
            </Text>
          }
        >
          <Box>
            <Columns space="gutter" alignY="center">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Button>Show me</Button>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Step
          heading="4. Add visual hierarchy"
          detail={
            <Text>
              In order to make the headline stand out more, the button needs to
              be pushed back in terms of its visual prominence. Firstly,
              let&rsquo;s reduce the visual weight by setting it to `weak`.
            </Text>
          }
        >
          <Box>
            <Columns space="gutter" alignY="center">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Button variant="ghost">Show me</Button>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Step
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Secondly, we can control the width of the button by using one of
                the layout components—in this case an{' '}
                <TextLink href="/components/Inline">Inline</TextLink>.
              </Text>
              <Text component="p" tone="secondary">
                NOTE: As there is only one component inside the `Inline`, we
                don&rsquo;t need to worry about defining the `space` between
                elements, so we can set `space` to `none`.
              </Text>
            </Stack>
          }
        >
          <Box>
            <Columns space="gutter" alignY="center">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Inline space="none">
                    <Button variant="ghost">Show me</Button>
                  </Inline>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Step
          heading="5. Add some colour"
          detail={
            <>
              <Text component="p">
                Now that we have our layout, let&rsquo;s get our banner some
                attention by applying a background colour to the `Box`
                container. In this example, we&rsquo;ll set a `background`
                colour of `brandAccent`.
              </Text>
              <Text component="p">
                Given we are emphasizing our banner using a coloured background,
                it makes sense to de-emphasize the button by applying a
                `neutral` tone.
              </Text>
            </>
          }
        >
          <Box background="brandAccent">
            <Columns space="gutter" alignY="center">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Inline space="none">
                    <Button variant="ghost" tone="neutral">
                      Show me
                    </Button>
                  </Inline>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Text>
          It&rsquo;s worth noting that, as the background colour changes, the
          foreground colour of the heading and button is automatically changed
          to improve the visual contrast. Click the &ldquo;Open in
          Playroom&rdquo; button on the code pane above to see how this behaves
          across different colours in different themes.
        </Text>

        <Step
          heading="6. Adjust the space in our `Box`"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Since adding the background colour, we can observe that our
                container is lacking some much needed breathing room around the
                content. This internal spacing is referred to as `padding`.
              </Text>
              <Text component="p">
                The <TextLink href="/components/Box">Box</TextLink> component
                allows you to control the padding using either:
              </Text>
              <List>
                <Text>`padding`: all sides equally,</Text>
                <Text>`paddingX`: left and right equally,</Text>
                <Text>`paddingY`: top and bottom equally, or</Text>
                <Text>
                  `paddingLeft`/`paddingRight`/`paddingTop`/`paddingBottom`:
                  only.
                </Text>
              </List>
              <Text component="p">
                You can mix and match! So in our banner we will apply
                &ldquo;small&rdquo; spacing horizontally and
                &ldquo;xlarge&rdquo; vertically.
              </Text>
            </Stack>
          }
        >
          <Box background="brandAccent" paddingX="small" paddingY="xlarge">
            <Columns space="gutter" alignY="center">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Inline space="none">
                    <Button variant="ghost" tone="neutral">
                      Show me
                    </Button>
                  </Inline>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Text component="p">
          Things are starting to come together now. If you click the &ldquo;Open
          in Playroom&rsquo; button on the code block above, you&rsquo;ll notice
          on mobile everything is a squeezed in side-by-side.
        </Text>

        <Text component="p">We&rsquo;ll address this next.</Text>

        <Step
          heading="7. Make the layout responsive"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                `Columns` allows us to define the device size beyond which the
                columns should collapse into a single vertical column. This can
                be done using the `collapseBelow` on `Columns` and choosing
                whether we want to it collapse down below &ldquo;wide&rdquo;,
                &ldquo;desktop&rdquo; or &ldquo;tablet&rdquo;.
              </Text>
              <Text component="p">
                In this case, we&rsquo;ll choose &ldquo;tablet&rdquo;.
              </Text>
            </Stack>
          }
        >
          <Box background="brandAccent" paddingX="small" paddingY="xlarge">
            <Columns space="gutter" alignY="center" collapseBelow="tablet">
              <Column width="3/5">
                <Stack space="large">
                  <Heading level="1">
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Inline space="none">
                    <Button variant="ghost" tone="neutral">
                      Show me
                    </Button>
                  </Inline>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Text component="p">
          Now if you &ldquo;Open in Playroom&rdquo;, our layout is looking much
          more mobile friendly. Next we&rsquo;ll adjust the horizontal alignment
          of our heading and button responsively so that it is centred on
          mobile.
        </Text>

        <Step
          heading="10. Align content responsively"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Alignment of both text and headings can accept responsive
                values, which give you more fine-grained control over what
                alignment should be used for each device size. Our system
                currently has 3 sizes: mobile, tablet, and desktop.
              </Text>
              <Text component="p">
                Currently our heading and button are left aligned, but now we
                can pass `align` a list of alignments—specifying what the
                alignment should be for each screen size.
              </Text>
              <Text component="p">
                For example: [&ldquo;center&rdquo;, &ldquo;left&rdquo;,
                &ldquo;right&rdquo;] would center the text on mobile, left align
                on tablet, and right align on desktop.
              </Text>
              <Text component="p">
                In this case we can specify [&ldquo;center&rdquo;,
                &ldquo;left&rdquo;], meaning anything tablet and above will be
                &ldquo;left&rdquo; aligned. Let&rsquo;s also apply this to the
                `Inline` component to responsively adjust the button alignment.
              </Text>
            </Stack>
          }
        >
          <Box background="brandAccent" paddingX="small" paddingY="xlarge">
            <Columns space="gutter" alignY="center" collapseBelow="tablet">
              <Column width="3/5">
                <Stack space="xlarge">
                  <Heading
                    level="1"
                    align={{ mobile: 'center', tablet: 'left' }}
                  >
                    Heard about our latest marketing campaign?
                  </Heading>
                  <Inline
                    space="none"
                    align={{ mobile: 'center', tablet: 'left' }}
                  >
                    <Button variant="ghost" tone="neutral">
                      Show me
                    </Button>
                  </Inline>
                </Stack>
              </Column>
              <Column>
                <Placeholder height={300} label="Marketing illustration" />
              </Column>
            </Columns>
          </Box>
        </Step>

        <Text component="p">
          Now if you click the &ldquo;Open in Playroom&rsquo; button on the code
          block above, our layout is scaling up pretty well from mobile through
          to desktop. However, you&rsquo;ll notice on large screens the content
          spans the full width. Let&rsquo;s tackle this next.
        </Text>

        <Step
          heading="9. Constrain layout on larger screens"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                To provide consistent structure and aid readability, most pages
                constrain layouts to a maximum width—we achieve this by wrapping
                the content in a{' '}
                <TextLink href="/components/ContentBlock">
                  ContentBlock
                </TextLink>
                .
              </Text>
              <Text component="p" tone="secondary">
                Note: We want to ensure that the coloured box is not constrained
                and extends full width, so be sure to add the `ContentBlock`
                inside the `Box` but around the `Columns`.
              </Text>
            </Stack>
          }
        >
          <Box background="brandAccent" paddingX="small" paddingY="xlarge">
            <ContentBlock>
              <Columns space="gutter" alignY="center">
                <Column width="3/5">
                  <Stack space="large">
                    <Heading level="1">
                      Heard about our latest marketing campaign?
                    </Heading>
                    <Inline space="none">
                      <Button variant="ghost" tone="neutral">
                        Show me
                      </Button>
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <Placeholder height={300} label="Marketing illustration" />
                </Column>
              </Columns>
            </ContentBlock>
          </Box>
        </Step>

        <Step
          heading="10. Polish!"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Now for some final spacing polish we can also leverage the same
                responsive technique to finesse the spacing across screen sizes.
              </Text>
              <Text component="p">
                As an example, let&rsquo;s increase the vertical padding on the
                `Box` to &ldquo;xxlarge&rdquo; above mobile by setting
                `paddingY` to [&ldquo;xlarge&rdquo;, &ldquo;xxlarge&rdquo;]
              </Text>
            </Stack>
          }
        >
          <Box
            background="brandAccent"
            paddingX="small"
            paddingY={{ mobile: 'xlarge', tablet: 'xxlarge' }}
          >
            <ContentBlock>
              <Columns space="gutter" alignY="center" collapseBelow="tablet">
                <Column width="3/5">
                  <Stack space="xlarge">
                    <Heading
                      level="1"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      Heard about our latest marketing campaign?
                    </Heading>
                    <Inline
                      space="none"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      <Button variant="ghost" tone="neutral">
                        Show me
                      </Button>
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <Placeholder height={300} label="Marketing illustration" />
                </Column>
              </Columns>
            </ContentBlock>
          </Box>
        </Step>

        <Step
          detail={
            <Stack space="xlarge">
              <Text component="p">
                And finally, we&rsquo;ll also add a bit more space between the
                columns when they collapse on mobile devices by changing the
                `space` on `Columns` to [&ldquo;xlarge&rdquo;,
                &ldquo;gutter&rdquo;]
              </Text>
            </Stack>
          }
        >
          <Box
            background="brandAccent"
            paddingX="small"
            paddingY={{ mobile: 'xlarge', tablet: 'xxlarge' }}
          >
            <ContentBlock>
              <Columns
                space={{ mobile: 'xlarge', tablet: 'gutter' }}
                alignY="center"
                collapseBelow="tablet"
              >
                <Column width="3/5">
                  <Stack space="large">
                    <Heading
                      level="1"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      Heard about our latest marketing campaign?
                    </Heading>
                    <Inline
                      space="none"
                      align={{ mobile: 'center', tablet: 'left' }}
                    >
                      <Button variant="ghost" tone="neutral">
                        Show me
                      </Button>
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <Placeholder height={300} label="Marketing illustration" />
                </Column>
              </Columns>
            </ContentBlock>
          </Box>
        </Step>
      </Stack>

      <Divider />

      <TextStack>
        <Heading level="3">Next steps</Heading>

        <Stack space="xlarge">
          <Text>
            Now that you are familiar with the code we have just written, this
            is a good chance to head over to Playroom and continue refining this
            design.
          </Text>
          <Text>You may want to consider:</Text>
          <List>
            <Text>
              Collapsing the `Columns` on screens smaller than `desktop` size
              rather than `tablet`. Hint: also be mindful of updating the text
              alignment 😉.
            </Text>
            <Text>
              Making a list of banners, alternating the directions of the{' '}
              <TextLink href="/components/Columns">Columns</TextLink>
            </Text>
          </List>
        </Stack>
      </TextStack>
    </TextStack>
  ),
};

export default page;
