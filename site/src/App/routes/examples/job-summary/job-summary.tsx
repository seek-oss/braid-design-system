import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Heading,
  Text,
  Divider,
  Card,
  Stack,
  Badge,
  IconTag,
  Rating,
  Inline,
  IconLocation,
  IconMoney,
  IconBookmark,
  TextLink,
  List,
  ButtonIcon,
  Spread,
} from 'braid-src/lib/components';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import { Placeholder } from 'braid-src/lib/playroom/components';
import React, { type ReactElement } from 'react';

import type { Page } from '../../../../types';
import Code from '../../../Code/Code';
import { PageTitle } from '../../../Seo/PageTitle';
import { TextStack } from '../../../TextStack/TextStack';

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ReactElement;
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="xlarge">
    {heading ? <LinkableHeading level="3">{heading}</LinkableHeading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);

const page: Page = {
  title: 'Job Summary',
  element: (
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
          <Stack space="large">
            <Spread space="small">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="4">Product Designer</Heading>
                <Inline space="small" alignY="center">
                  <Text>Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>
              <ButtonIcon
                variant="transparent"
                size="large"
                icon={<IconBookmark />}
                label="Save job"
                id="save-preview"
              />
            </Spread>

            <Stack space="small">
              <Text tone="secondary" icon={<IconLocation />}>
                Melbourne
              </Text>
              <Text tone="secondary" icon={<IconTag />}>
                Information Technology
              </Text>
              <Text tone="secondary" icon={<IconMoney />}>
                150k+
              </Text>
            </Stack>
            <Text>
              Long description of card details providing more information.
            </Text>
            <Text tone="secondary" size="small">
              2d ago
            </Text>
          </Stack>
        </Card>
      </Code>

      <Heading level="4">How do I build this example for myself?</Heading>

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
            <Heading level="4">Product Designer</Heading>
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
            <Stack space="large">
              <Heading level="4">Product Designer</Heading>
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
            <Stack space="large">
              <Stack space="small">
                <Heading level="4">Product Designer</Heading>
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
            <Stack space="large">
              <Stack space="small">
                <Heading level="4">Product Designer</Heading>
                <Text>Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="small">
                <Text tone="secondary">Melbourne</Text>
                <Text tone="secondary">Information Technology</Text>
                <Text tone="secondary">150k+</Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="small">
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
            <Stack space="large">
              <Stack space="small">
                <Heading level="4">Product Designer</Heading>
                <Text>Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="small">
                <Text tone="secondary" icon={<IconLocation />}>
                  Melbourne
                </Text>
                <Text tone="secondary" icon={<IconTag />}>
                  Information Technology
                </Text>
                <Text tone="secondary" icon={<IconMoney />}>
                  150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="small">
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
            <Stack space="large">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="4">Product Designer</Heading>
                <Text>Braid Design Pty Ltd</Text>
              </Stack>

              <Stack space="small">
                <Text tone="secondary" icon={<IconLocation />}>
                  Melbourne
                </Text>
                <Text tone="secondary" icon={<IconTag />}>
                  Information Technology
                </Text>
                <Text tone="secondary" icon={<IconMoney />}>
                  150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="small">
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
            <Stack space="large">
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="4">Product Designer</Heading>
                <Inline space="small" alignY="center">
                  <Text>Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>

              <Stack space="small">
                <Text tone="secondary" icon={<IconLocation />}>
                  Melbourne
                </Text>
                <Text tone="secondary" icon={<IconTag />}>
                  Information Technology
                </Text>
                <Text tone="secondary" icon={<IconMoney />}>
                  150k+
                </Text>
              </Stack>

              <Text>
                Long description of card details providing more information.
              </Text>

              <Text tone="secondary" size="small">
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
                Sometimes adding new features can necessitate changing the
                layout. First, we&rsquo;ll use a{' '}
                <TextLink href="/components/spread">Spread</TextLink> component
                to separate our content and action.
              </Text>
              <Text tone="secondary">
                NOTE: To make this easier to follow, we&rsquo;ve replaced the
                job content with a Placeholder.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Spread space="small">
              <Placeholder label="Job content" height={80} />
              <Placeholder label="Save action" height={80} />
            </Spread>
          </Card>
        </Step>

        <Step
          detail={
            <Text>
              For the save action we&rsquo;ll use a{' '}
              <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink> with
              an{' '}
              <TextLink href="/components/IconBookmark">IconBookmark</TextLink>.
              We can now replace our &ldquo;Save action&rdquo; Placeholder with
              the ButtonIcon.
            </Text>
          }
        >
          <Card>
            <Spread space="small">
              <Placeholder label="Job content" height={80} />
              <ButtonIcon
                variant="transparent"
                size="large"
                icon={<IconBookmark />}
                label="Save job"
                id="save-7a"
              />
            </Spread>
          </Card>
        </Step>

        <Step
          detail={
            <Text>
              Now that we&rsquo;ve added the action, let&rsquo;s reinstate our
              content by replacing the &ldquo;Job content&rdquo; Placeholder.
            </Text>
          }
        >
          <Card>
            <Spread space="small">
              <Stack space="large">
                <Stack space="small">
                  <Badge tone="positive">New</Badge>
                  <Heading level="4">Product Designer</Heading>
                  <Inline space="small" alignY="center">
                    <Text>Braid Design Pty Ltd</Text>
                    <Rating rating={4.5} />
                  </Inline>
                </Stack>

                <Stack space="small">
                  <Text tone="secondary" icon={<IconLocation />}>
                    Melbourne
                  </Text>
                  <Text tone="secondary" icon={<IconTag />}>
                    Information Technology
                  </Text>
                  <Text tone="secondary" icon={<IconMoney />}>
                    150k+
                  </Text>
                </Stack>

                <Text>
                  Long description of card details providing more information.
                </Text>

                <Text tone="secondary" size="small">
                  2d ago
                </Text>
              </Stack>
              <ButtonIcon
                variant="transparent"
                size="large"
                icon={<IconBookmark />}
                label="Save job"
                id="save-7b"
              />
            </Spread>
          </Card>
        </Step>

        <Text>
          Now that we have all our elements in place we can polish until we are
          happy. Adjusting white space between elements, or even responsively,
          to achieve the desired goal.
        </Text>
      </Stack>

      <Divider />

      <TextStack>
        <LinkableHeading level="4">Next steps</LinkableHeading>

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
