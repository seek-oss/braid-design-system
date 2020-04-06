import React, { ReactNode, ReactChild } from 'react';
import { Page } from '../../../../types';
import {
  Heading,
  Text,
  Divider,
  Card,
  Stack,
  Columns,
  Column,
  Box,
  Badge,
  IconTag,
  Rating,
  Inline,
  IconLocation,
  IconMoney,
  IconBookmark,
  TextLink,
} from '../../../../../../lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import { ThemedExample } from '../../../ThemeSetting';
import { Placeholder } from '../../../../../../lib/playroom/components';
import Code from '../../../Code/Code';
import { ReactNodeNoStrings } from '../../../../../../lib/components/private/ReactNodeNoStrings';

const Preview = ({ children }: { children: ReactNode }) => (
  <Box padding="medium" background="brand" borderRadius="standard">
    <ThemedExample>{children}</ThemedExample>
  </Box>
);

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ReactChild;
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="medium">
    {heading ? <Heading level="3">{heading}</Heading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);

const page: Page = {
  title: 'Job Card',
  component: () => (
    <TextStack>
      <Heading level="2">Job Card</Heading>

      <Text size="large">
        In this tutorial will build out a basic Job Card, taking the concepts
        and ideas discussed in the guides & foundation documentation further.
      </Text>

      <Preview>
        <Card>
          <Stack space="gutter">
            <Columns space="gutter">
              <Column>
                <Stack space="small">
                  <Badge tone="positive">New</Badge>
                  <Heading level="3">Product Designer</Heading>
                  <Inline space="small">
                    <Text tone="secondary">Braid Design Pty Ltd</Text>
                    <Rating rating={4.5} />
                  </Inline>
                </Stack>
              </Column>
              <Column width="content">
                <IconBookmark />
              </Column>
            </Columns>

            <Stack space="xsmall">
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
      </Preview>

      <Divider />

      <Stack space="xxlarge">
        <Step
          heading="1. Create the container"
          detail={
            <Text>
              To get started, we will first add a `Card`, that will be the
              container for our job details.
            </Text>
          }
        >
          <Card>
            <Placeholder label="Job details placeholder" height={50} />
          </Card>
        </Step>

        <Step
          heading="2. Adding the content"
          detail={
            <Text>
              Adding the information up-front is a useful exercise. This allows
              us to consider the hierarchy of information, critical for purposes
              like SEO or assistive technologies such as screen readers.
            </Text>
          }
        >
          <Card>
            <h1>Product Designer</h1>
            <div>Braid Design Pty Ltd</div>
            <div>Melbourne</div>
            <div>Information Technology</div>
            <div>150k+</div>
            <div>
              Long description of card details providing more information.
            </div>
            <div>2d ago</div>
          </Card>
        </Step>

        <Step
          heading="3. Formatting the copy"
          detail={
            <Text>
              Let&rsquo;s now apply some basic formatting to our copy using{' '}
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
          heading="3. Laying out the content"
          detail={
            <Text>
              Next step is to describe how &ldquo;tight&rdquo; or
              &ldquo;loose&rdquo; we want the content to be. A{' '}
              <TextLink href="/components/Stack">Stack</TextLink> is used to
              describe the amount of space that should be between each of
              it&rsquo;s child elements—in this case, that is each piece of job
              information.
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
          heading="4. Grouping content"
          detail={
            <Text>
              Grouping the content in sections can help provide hierarchy to the
              information, and in turn, make it easier to digest. Let&rsquo;s
              now tighten the information up to form a four descrete
              sections—the header, meta, body and footer.
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
          heading="5. Information hierarchy"
          detail={
            <Text>
              Not all the information within the card has the same priority. To
              improve readability we can adjust the{' '}
              <TextLink href="/foundations/tones">tone</TextLink> and/or the
              size of some information. In this case, pushing some details back
              to &ldquo;secondary&rdquo; and/or reducing their
              &ldquo;size&rdquo;.
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
          heading="6. Use of icons"
          detail={
            <Text>
              <TextLink href="/foundations/iconography">Icons</TextLink> can be
              used to serve a visual cues to complement data and introduce some
              more visual interest.
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
          heading="7. Adding additional content"
          detail={
            <Text>
              Adding or changing the information in a product is part of the
              every day, let&rsquo;s look at adding a visual cue to indicate
              that this job is new. To do this, we will add a{' '}
              <TextLink href="/components/Badge">Badge</TextLink> in the header
              section of the card.
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

              <Stack space="small">
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
            <Stack space="large">
              <Text>
                Now let&rsquo;s add a{' '}
                <TextLink href="/components/Rating">Rating</TextLink> alongside
                the company name. Ideally we want this to sit on the same line,
                but if it does not fit due to the length of the name or the size
                of the screen we want it to wrap below. For this we can use the{' '}
                <TextLink href="/components/Inline">Inline</TextLink> component.
              </Text>
              <Text size="small" tone="secondary">
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

              <Stack space="small">
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
          heading="8. Changing the layout"
          detail={
            <Text>
              It is common to add new features that necessitate changing the
              layout. Let&rsquo;s now add a save action to the top right corner
              of the card. First add a 2 column layout to the top of the card.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Column>
                  <Placeholder height={50} />
                </Column>
                <Column>
                  <Placeholder height={50} />
                </Column>
              </Columns>

              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="3">Product Designer</Heading>
                <Inline space="small">
                  <Text tone="secondary">Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>

              <Stack space="small">
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
              Now we can move the header section of the job into the first
              column of the layout.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Column>
                  <Stack space="small">
                    <Badge tone="positive">New</Badge>
                    <Heading level="3">Product Designer</Heading>
                    <Inline space="small">
                      <Text tone="secondary">Braid Design Pty Ltd</Text>
                      <Rating rating={4.5} />
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <Placeholder height={50} />
                </Column>
              </Columns>

              <Stack space="small">
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
              In the second column we will use the{' '}
              <TextLink href="/components/IconBookmark">IconBookmark</TextLink>{' '}
              as the save action.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Column>
                  <Stack space="small">
                    <Badge tone="positive">New</Badge>
                    <Heading level="3">Product Designer</Heading>
                    <Inline space="small">
                      <Text tone="secondary">Braid Design Pty Ltd</Text>
                      <Rating rating={4.5} />
                    </Inline>
                  </Stack>
                </Column>
                <Column>
                  <IconBookmark />
                </Column>
              </Columns>

              <Stack space="small">
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
              By default, `Columns` are of equal width, in this design however,
              the second column should only we as wide as the save action
              itself. This can be controlled by setting the `Column`
              &ldquo;width&rdquo; to &ldquo;content&rdquo;.
            </Text>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Column>
                  <Stack space="small">
                    <Badge tone="positive">New</Badge>
                    <Heading level="3">Product Designer</Heading>
                    <Inline space="small">
                      <Text tone="secondary">Braid Design Pty Ltd</Text>
                      <Rating rating={4.5} />
                    </Inline>
                  </Stack>
                </Column>
                <Column width="content">
                  <IconBookmark />
                </Column>
              </Columns>

              <Stack space="small">
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
          heading="9. Polish!"
          detail={
            <Stack space="large">
              <Text>
                Now that we have all our elements in place we can polish until
                we are happy. Adjusting white space between elements, or even
                responsively, to achieve the desired goal.
              </Text>
              <Text>
                In this case, we might tighten up the meta data section by
                reducing the &ldquo;space&rdquo; to &ldquo;xsmall&rdquo;.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="gutter">
              <Columns space="gutter">
                <Column>
                  <Stack space="small">
                    <Badge tone="positive">New</Badge>
                    <Heading level="3">Product Designer</Heading>
                    <Inline space="small">
                      <Text tone="secondary">Braid Design Pty Ltd</Text>
                      <Rating rating={4.5} />
                    </Inline>
                  </Stack>
                </Column>
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
      </Stack>
    </TextStack>
  ),
};

export default page;
