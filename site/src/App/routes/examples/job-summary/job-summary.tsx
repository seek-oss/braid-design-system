import React, { ReactChild } from 'react';
import { Page } from '../../../../types';
import {
  Heading,
  Text,
  Divider,
  Card,
  Stack,
  Columns,
  Column,
  Badge,
  IconTag,
  Rating,
  Inline,
  IconLocation,
  IconMoney,
  IconBookmark,
  TextLink,
  List,
  Notice,
  Strong,
} from '../../../../../../lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import { Placeholder } from '../../../../../../lib/playroom/components';
import Code from '../../../Code/Code';
import { ReactNodeNoStrings } from '../../../../../../lib/components/private/ReactNodeNoStrings';
import { PageTitle } from '../../../Seo/PageTitle';

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
  title: 'Job Summary',
  component: () => (
    <TextStack>
      <Stack space="medium">
        <Heading level="3" weight="weak">
          <PageTitle title="Job Summary Example" />
          Examples /
        </Heading>
        <Heading component="h1" level="2">
          Job Summary
        </Heading>
      </Stack>

      <Code collapsedByDefault>
        <Card>
          <Stack space="gutter">
            <Columns space="gutter">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="3">Product Designer</Heading>
                <Inline space="small">
                  <Text tone="secondary">Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>
              <Column width="content">
                <IconBookmark />
              </Column>
            </Columns>

            <Stack space="small">
              <Text size="small" tone="secondary">
                <IconLocation /> Melbourne
              </Text>
              <Text size="small" tone="secondary">
                <IconTag /> Information Technology
              </Text>
              <Text size="small" tone="secondary">
                <IconMoney /> 150k+
              </Text>
            </Stack>
            <Text>
              Long description of card details providing more information.
            </Text>
            <Text tone="secondary" size="xsmall">
              2d ago
            </Text>
          </Stack>
        </Card>
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
          heading="1. Create card with basic content"
          detail={
            <Text>
              Adding the basic content up front is a great place to start,
              allowing us to consider the hierarchy of information as we
              iterate. We&rsquo;ll nest this content inside a{' '}
              <TextLink href="/components/Card">Card</TextLink> and apply some
              basic formatting using{' '}
              <TextLink href="/components/Heading">Heading</TextLink> and{' '}
              <TextLink href="/components/Text">Text</TextLink>.
            </Text>
          }
        >
          <Card>
            <Heading level="3">Product Designer</Heading>
            <Text>Braid Design Pty Ltd</Text>
            <Text>Melbourne</Text>
            <Text>Information Technology</Text>
            <Text>150k+</Text>
            <Text>
              Long description of card details providing more information.
            </Text>
            <Text>2d ago</Text>
          </Card>
        </Step>

        <Step
          heading="2. Space out the content"
          detail={
            <Text>
              You&rsquo;ll notice that there is no space between components by
              default. This is actually a good thing! We now get to decide
              exactly how spaced out we want the content to be. To achieve this,
              we&rsquo;ll use a{' '}
              <TextLink href="/components/Stack">Stack</TextLink> component
              which applies space evenly between its child elements.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Heading level="3">Product Designer</Heading>
              <Text>Braid Design Pty Ltd</Text>
              <Text>Melbourne</Text>
              <Text>Information Technology</Text>
              <Text>150k+</Text>
              <Text>
                Long description of card details providing more information.
              </Text>
              <Text>2d ago</Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="3. Group content"
          detail={
            <Text>
              Grouping the content into sections can help provide structure to
              the information, and in turn, make it easier to digest.
              Let&rsquo;s divide the information into four descrete sections —
              the header, metadata, body and footer. For this, we&rsquo;ll start
              nesting new <TextLink href="/components/Stack">Stack</TextLink>{' '}
              components within our existing Stack. (Yeah, we realise this is a
              little mind bending at first!)
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Stack space="small">
                <Heading level="3">Product Designer</Heading>
                <Text>Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="small">
                <Text>Melbourne</Text>
                <Text>Information Technology</Text>
                <Text>150k+</Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text>2d ago</Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="4. Use size and tone to provide hierarchy"
          detail={
            <Text>
              Not all the information presented has the same priority. To
              improve readability, we can adjust the{' '}
              <TextLink href="/foundations/tones">tone</TextLink> and/or the
              size of the information. In this case, pushing some details back
              to &ldquo;secondary&rdquo; and/or reducing their size can help
              focus the user&rsquo;s attention.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Stack space="small">
                <Heading level="3">Product Designer</Heading>
                <Text tone="secondary">Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="small">
                <Text tone="secondary" size="small">
                  Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="5. Add icons"
          detail={
            <Text>
              <TextLink href="/foundations/iconography">Icons</TextLink> can be
              used to serve as visual cues to complement data and introduce some
              more visual interest. Let&rsquo;s add icons to our list of
              metadata.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Stack space="small">
                <Heading level="3">Product Designer</Heading>
                <Text tone="secondary">Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="6. Add a splash of colour"
          detail={
            <Text>
              Let&rsquo;s look at adding a visual cue to indicate that this job
              is new. To do this, we&rsquo;ll add a{' '}
              <TextLink href="/components/Badge">Badge</TextLink> component to
              the top of our card.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="3">Product Designer</Heading>
                <Text tone="secondary">Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          detail={
            <Stack space="xlarge">
              <Text>
                Let&rsquo;s also add a{' '}
                <TextLink href="/components/Rating">Rating</TextLink> alongside
                the company name. Ideally we want this to sit on the same line,
                but if it does not fit due to the length of the name or the size
                of the screen we want it to wrap below. For this we can use the{' '}
                <TextLink href="/components/Inline">Inline</TextLink> component.
              </Text>
              <Text tone="secondary">
                NOTE: Click through to the Playroom to see how this behaves
                across screen sizes.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="gutter">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="3">Product Designer</Heading>
                <Inline space="small">
                  <Text tone="secondary">Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="7. Add an action to the corner of the card"
          detail={
            <Stack space="xlarge">
              <Text>
                Sometimes adding new features can necessitate moving elements
                around to achieve a specific layout. In this case, we&rsquo;ll
                use a <TextLink href="/components/columns">Columns</TextLink>{' '}
                component to wrap the header of our card and split it into two
                columns — one for the job header, the other for the save action.
              </Text>
              <Notice>
                <Text>
                  NOTE: To make this easier to visualise, we&rsquo;ve replaced
                  the header content with our desired layout using Placeholders.
                </Text>
              </Notice>
            </Stack>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Placeholder label="Job header" height={80} />
                <Placeholder label="Save action" height={80} />
              </Columns>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          detail={
            <Stack space="xlarge">
              <Text>
                By default, each direct child element of{' '}
                <Strong>Columns</Strong> will result in a column of equal width.
                Given the second column will only contain our save action we
                want to leave the majority of space for the job header.
              </Text>
              <Text>
                We can achieve this by wrapping the save action in an explicit{' '}
                <Strong>Column</Strong> and setting it&rsquo;s
                &ldquo;width&rdquo; to only be as large as it&rsquo;s
                &ldquo;content&rdquo; — in this case the{' '}
                <TextLink href="/components/IconBookmark">
                  IconBookmark
                </TextLink>{' '}
                icon.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Placeholder label="Job header" height={80} />
                <Column width="content">
                  <IconBookmark />
                </Column>
              </Columns>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          detail={
            <Text>
              Now that we&rsquo;ve adjusted the layout, let&rsquo;s reinstate
              our job header in the main column.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Stack space="small">
                  <Badge tone="positive">New</Badge>
                  <Heading level="3">Product Designer</Heading>
                  <Inline space="small">
                    <Text tone="secondary">Braid Design Pty Ltd</Text>
                    <Rating rating={4.5} />
                  </Inline>
                </Stack>
                <Column width="content">
                  <IconBookmark />
                </Column>
              </Columns>

              <Stack space="xsmall">
                <Text tone="secondary" size="small">
                  <IconLocation /> Melbourne
                </Text>
                <Text tone="secondary" size="small">
                  <IconTag /> Information Technology
                </Text>
                <Text tone="secondary" size="small">
                  <IconMoney /> 150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="8. Polish!"
          detail={
            <Stack space="xlarge">
              <Text>
                Now that we have all our elements in place we can polish until
                we are happy. Adjusting white space between elements, or even
                responsively, to achieve the desired goal.
              </Text>
              <Text>
                In this case, we might loosen up the metadata section by
                increasing the space to &ldquo;small&rdquo;.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Stack space="small">
                  <Badge tone="positive">New</Badge>
                  <Heading level="3">Product Designer</Heading>
                  <Inline space="small">
                    <Text tone="secondary">Braid Design Pty Ltd</Text>
                    <Rating rating={4.5} />
                  </Inline>
                </Stack>
                <Column width="content">
                  <IconBookmark />
                </Column>
              </Columns>

              <Stack space="small">
                <Text size="small" tone="secondary">
                  <IconLocation /> Melbourne
                </Text>
                <Text size="small" tone="secondary">
                  <IconTag /> Information Technology
                </Text>
                <Text size="small" tone="secondary">
                  <IconMoney /> 150k+
                </Text>
              </Stack>
              <Text>
                Long description of card details providing more information.
              </Text>
              <Text tone="secondary" size="xsmall">
                2d ago
              </Text>
            </Stack>
          </Card>
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
              Using <TextLink href="/components/Hidden">Hidden</TextLink> to
              reduce the amount of data shown on mobile,
            </Text>
            <Text>
              Specifying different spacing responsively using{' '}
              <TextLink href="/components/Stack">Stack</TextLink>,
            </Text>
            <Text>
              Adding a company logo. You can use Placeholder component if you
              don&rsquo;t have hosted imagery to work with.
            </Text>
          </List>
        </Stack>
      </TextStack>
    </TextStack>
  ),
};

export default page;
