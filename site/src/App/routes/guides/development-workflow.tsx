import { LinkableHeading } from '@braid-design-system/docs-ui';
import source from '@braid-design-system/source.macro';
import {
  Heading,
  Text,
  TextLink,
  Divider,
  Strong,
  Card,
  Stack,
  Badge,
  IconTag,
  Rating,
  Inline,
  IconLocation,
  IconMoney,
  IconBookmark,
  List,
  ButtonIcon,
  Spread,
  Box,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';
import type { ComponentProps } from 'react';

import type { Page } from '../../../types';
import Code from '../../Code/Code';
import { InlineCode } from '../../InlineCode/InlineCode';
import { PageTitle } from '../../Seo/PageTitle';
import { TextStack } from '../../TextStack/TextStack';

type ReactNodeNoStrings = ComponentProps<typeof Stack>['children'];

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ComponentProps<typeof Code>['children'];
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="xlarge">
    {heading ? <LinkableHeading level="4">{heading}</LinkableHeading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);

const DevelopmentWorkflow = () => (
  <TextStack>
    <Heading level="1">
      <PageTitle title="Development Workflow" />
      Development Workflow
    </Heading>
    <Text tone="secondary">
      This document aims to provide guidance for consumers on how best to build
      interfaces that properly leverage Braid.
    </Text>

    <Divider />

    <LinkableHeading level="3">Working with components</LinkableHeading>
    <Text>
      Braid provides consumers with a suite of components that are powered by an
      underlying themed styling system.
    </Text>
    <Text>
      The idealistic goal is that consumers should be able to build their
      experiences entirely from Braid components—using only the prop interfaces
      they expose. If done correctly, our products should be expressed
      exclusively using the design system’s language, which inherently means
      that they can be adapted to any theme that Braid supports.
    </Text>
    <Text>
      However, it’s expected that you’ll find gaps in the system, so Braid also
      provides lower level building blocks for generating custom components.
    </Text>

    <LinkableHeading level="3">High level components</LinkableHeading>
    <Text>
      Braid’s high level components are most likely the ones you would come to
      expect from a design system, e.g.{' '}
      <TextLink href="/components/Text">Text</TextLink>,{' '}
      <TextLink href="/components/Heading">Heading</TextLink>,{' '}
      <TextLink href="/components/Card">Card</TextLink>,{' '}
      <TextLink href="/components/Button">Button</TextLink>,{' '}
      <TextLink href="/components/TextField">TextField</TextLink>, etc.
    </Text>
    <Text>
      For these high level components, we have opted against supporting style
      overrides via <InlineCode>className</InlineCode> and{' '}
      <InlineCode>style</InlineCode> props. This ensures that gaps in the design
      system are surfaced rather than encouraging consumers to constantly apply
      workarounds.
    </Text>

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

    <LinkableHeading level="3">
      How do I build this example for myself?
    </LinkableHeading>

    <Text>
      Designs like this are rarely built top-to-bottom in a single pass.
      Instead, they typically start very simple, with further details and
      refinements added in layers.
    </Text>
    <Text>
      To give you a sense of what this looks like, the following tutorial will
      guide you through the design process that you might go through when using{' '}
      <TextLink href="/playroom">Playroom</TextLink>.
    </Text>

    <Text tone="secondary">
      At any stage you can click the &ldquo;Open in Playroom&rdquo; button under
      the examples to view the design across themes and viewports.
    </Text>

    <Divider />

    <Stack space="xxlarge">
      <Step
        heading="1. Create card with basic content"
        detail={
          <Text>
            Adding the basic content up front is a great place to start,
            allowing us to consider the hierarchy of information as we iterate.
            We&rsquo;ll nest this content inside a{' '}
            <TextLink href="/components/Card">Card</TextLink> and apply some
            basic formatting using{' '}
            <TextLink href="/components/Heading">Heading</TextLink> and{' '}
            <TextLink href="/components/Text">Text</TextLink>.
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="2. Space out the content"
        detail={
          <Text>
            You&rsquo;ll notice that there is no space between components by
            default. This is actually a good thing! We now get to decide exactly
            how spaced out we want the content to be. To achieve this,
            we&rsquo;ll use a <TextLink href="/components/Stack">Stack</TextLink>{' '}
            component which applies space evenly between its child elements.
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="3. Group content"
        detail={
          <Text>
            Grouping the content into sections can help provide structure to the
            information, and in turn, make it easier to digest. Let&rsquo;s
            divide the information into four descrete sections — the header,
            metadata, body and footer. For this, we&rsquo;ll start nesting new{' '}
            <TextLink href="/components/Stack">Stack</TextLink> components
            within our existing Stack. (Yeah, we realise this is a little mind
            bending at first!)
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="4. Use size and tone to provide hierarchy"
        detail={
          <Text>
            Not all the information presented has the same priority. To improve
            readability, we can adjust the{' '}
            <TextLink href="/foundations/tones">tone</TextLink> and/or the size
            of the information. In this case, pushing some details back to
            &ldquo;secondary&rdquo; and/or reducing their size can help focus
            the user&rsquo;s attention.
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="5. Add icons"
        detail={
          <Text>
            <TextLink href="/foundations/iconography">Icons</TextLink> can be
            used to serve as visual cues to complement data and introduce some
            more visual interest. Let&rsquo;s add icons to our list of metadata.
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="6. Add a splash of colour"
        detail={
          <Text>
            Let&rsquo;s look at adding a visual cue to indicate that this job is
            new. To do this, we&rsquo;ll add a{' '}
            <TextLink href="/components/Badge">Badge</TextLink> component to the
            top of our card.
          </Text>
        }
      >
        {source(
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
          </Card>,
        )}
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
              NOTE: Click through to the Playroom to see how this behaves across
              screen sizes.
            </Text>
          </Stack>
        }
      >
        {source(
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
          </Card>,
        )}
      </Step>

      <Step
        heading="7. Add an action to the corner of the card"
        detail={
          <Stack space="xlarge">
            <Text>
              Sometimes adding new features can necessitate changing the layout.
              First, we&rsquo;ll use a{' '}
              <TextLink href="/components/spread">Spread</TextLink> component to
              separate our content and action.
            </Text>
            <Text tone="secondary">
              NOTE: To make this easier to follow, we&rsquo;ve replaced the job
              content with a Placeholder.
            </Text>
          </Stack>
        }
      >
        {source(
          <Card>
            <Spread space="small">
              <Placeholder label="Job content" height={80} />
              <Placeholder label="Save action" height={80} />
            </Spread>
          </Card>,
        )}
      </Step>

      <Step
        detail={
          <Text>
            For the save action we&rsquo;ll use a{' '}
            <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink> with
            an{' '}
            <TextLink href="/components/IconBookmark">IconBookmark</TextLink>. We
            can now replace our &ldquo;Save action&rdquo; Placeholder with the
            ButtonIcon.
          </Text>
        }
      >
        {source(
          <Card>
            <Spread space="small">
              <Placeholder label="Job content" height={80} />
              <ButtonIcon
                variant="transparent"
                size="large"
                icon={<IconBookmark />}
                label="Save job"
              />
            </Spread>
          </Card>,
        )}
      </Step>

      <Step
        detail={
          <Text>
            Now that we&rsquo;ve added the action, let&rsquo;s reinstate our
            content by replacing the &ldquo;Job content&rdquo; Placeholder.
          </Text>
        }
      >
        {source(
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
              />
            </Spread>
          </Card>,
        )}
      </Step>

      <Text>
        Now that we have all our elements in place we can polish until we are
        happy. Adjusting white space between elements, or even responsively, to
        achieve the desired goal.
      </Text>
    </Stack>

    <Divider />

    <TextStack>
      <LinkableHeading level="4">Next steps</LinkableHeading>

      <Stack space="xlarge">
        <Text>
          Now that you are familiar with the code we have just written, this is
          a good chance to head over to Playroom and continue refining this
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

    <Divider />

    <LinkableHeading level="3">Need a custom component?</LinkableHeading>
    <Text>
      If you’re unable to satisfy a design using the built-in set of higher
      level components, Braid also provides consumers with the{' '}
      <TextLink href="/components/Box">Box</TextLink> component that provides
      direct access to the themed atomic styles that Braid uses internally,
      without the overhead of having to create and import a separate style
      sheet. A nice side-effect of this approach is that your application will
      be reusing existing CSS rules rather than generating new ones, keeping
      your bundle size to a minimum.
    </Text>
    <Text>
      The prop names for <TextLink href="/components/Box">Box</TextLink> mostly
      mimic standard CSS properties, while their values are more semantic,
      allowing the corresponding CSS rules to be computed across themes.
    </Text>
    <Code>
      {source(
        <Box background="brand" boxShadow="large" padding="large">
          <Text>My first Braid component</Text>
        </Box>,
      )}
    </Code>
    <Text>
      For more details, view the complete{' '}
      <TextLink href="/components/Box">Box documentation</TextLink>. For
      TypeScript users, you should also find that the Box API is available for
      autocompletion and type checking within your editor.
    </Text>

    <LinkableHeading level="3">Need responsive styles?</LinkableHeading>
    <Text>
      Previously, one of the main reasons for needing to create custom CSS was
      to define responsive rules. The{' '}
      <TextLink href="/components/Box">Box</TextLink> component makes this
      possible via <Strong>responsive properties,</Strong> which allows
      different values to specified for each defined breakpoint.
    </Text>
    <Text>
      For example, if we wanted to change the value for{' '}
      <InlineCode>display</InlineCode> responsively:
    </Text>
    <Code>
      {source(
        <Box display={{ mobile: 'flex', tablet: 'block' }}>
          <Heading level="2">Flex on small screen</Heading>
          <Heading level="2">Block on large screen</Heading>
        </Box>,
      )}
    </Code>
    <Text>
      For a list of low-level responsive props, check out the{' '}
      <TextLink href="/components/Box">Box documentation.</TextLink>
    </Text>

    <LinkableHeading level="3">Need semantic markup?</LinkableHeading>
    <Text>
      A key difference with Braid is that it doesn’t use a standard global CSS
      reset. Instead, element styles are reset at the component level via{' '}
      <TextLink href="/components/Box">Box</TextLink> and its{' '}
      <InlineCode>component</InlineCode> prop.
    </Text>
    <Text>
      For example, in order to render a semantic{' '}
      <InlineCode>fieldset</InlineCode> element without the native browser
      styles:
    </Text>
    <Code>
      {source(
        <Box component="fieldset">
          <legend>Reset Fieldset</legend>
        </Box>,
      )}
    </Code>

    <LinkableHeading level="3">Still need custom CSS?</LinkableHeading>
    <Text>
      Braid is built on top of{' '}
      <TextLink href="https://vanilla-extract.style/">vanilla-extract</TextLink>{' '}
      which satisfies our requirements for statically extracted CSS, leveraging
      CSS variables for theming. Custom styles on top of Braid can access the
      theme variables by importing them from Braid’s{' '}
      <InlineCode>css</InlineCode> export:
    </Text>
    <Code>{`import { vars } from 'braid-design-system/css';`}</Code>
    <Text weight="strong">
      Before writing custom styles, we highly recommend that you read the{' '}
      <TextLink href="https://vanilla-extract.style/documentation/">
        vanilla-extract documentation.
      </TextLink>
    </Text>
    <Text>
      While higher level Braid components don’t support custom style overrides
      (e.g. <InlineCode>className</InlineCode> and{' '}
      <InlineCode>style</InlineCode>),{' '}
      <TextLink href="/components/Box">Box</TextLink> is the one exception.
      However, you should take care to ensure that custom classes on{' '}
      <TextLink href="/components/Box">Box</TextLink> only use styles that are
      not available via its prop interface.
    </Text>
    <Text>
      For example, if you wanted to render an element as{' '}
      <InlineCode>display: flex</InlineCode>, but with a custom, responsive{' '}
      <InlineCode>flex-basis</InlineCode> value:
    </Text>
    <Code>
      {`
        // myComponent.css.ts
        import { style } from '@vanilla-extract/css';
        import { vars, responsiveStyle } from 'braid-design-system/css';

        export const root = style(
          responsiveStyle({
            mobile: { flexBasis: vars.space.small },
            tablet: { flexBasis: vars.space.medium },
            desktop: { flexBasis: vars.space.large },
            wide: { flexBasis: vars.space.xlarge },
          }),
        );
      `}
    </Code>
    <Text>
      Because vanilla-extract stylesheets are written in TypeScript (note the
      <InlineCode>.css.ts</InlineCode> extension), the{' '}
      <InlineCode>vars</InlineCode> object will be available for autocompletion
      and type checking within your editor.
    </Text>
    <Code>
      {`
        // myComponent.ts
        import * as styles from './myComponent.css';

        export default function MyComponent() {
          return (
            <Box display="flex" className={styles.root}>
              <Text>My first Braid component</Text>
            </Box>
          );
        };
      `}
    </Code>

    <Divider />

    <Heading level="3">Have a question that wasn’t answered?</Heading>
    <Text>
      Reach out to us in{' '}
      <TextLink href="https://seekchat.slack.com/channels/braid-support">
        #braid-support
      </TextLink>
      .
    </Text>
  </TextStack>
);

const page: Page = {
  title: 'Development Workflow',
  element: <DevelopmentWorkflow />,
};

export default page;
