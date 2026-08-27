import source from '@braid-design-system/source.macro';
import {
  Actions,
  Box,
  Button,
  Card,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Inline,
  List,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
  Tiles,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      An empty state occurs when there is no data available at the present time.
      An empty state can be used to give the user clues about what they might
      see when there is data, and/or to explain what they should do next. An
      empty state may be large and take up most of the page, or it may be small
      and sit within other content.
    </Text>
  ),
  additional: [
    {
      label: 'Large and full-page empty states',
      description: (
        <Text>
          For empty states that take up most or all of the page, such as when
          there are no matching search results.
        </Text>
      ),
      Example: ({ responsiveValue }) =>
        source(
          <Box background="surface" borderRadius="large" padding="gutter">
            <ContentBlock width="small">
              <Stack
                align="center"
                space={{ mobile: 'medium', desktop: 'large' }}
              >
                <Placeholder
                  shape="round"
                  width={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                  height={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                />
                <Stack space="medium" align="center">
                  <Heading level="2" weight="weak" align="center">
                    An example empty state
                  </Heading>
                  <Text tone="secondary" align="center">
                    This is a center aligned example with a short summary. You
                    can use a button or <TextLink href="#">a TextLink</TextLink>{' '}
                    to suit your needs.
                  </Text>
                  <Actions>
                    <Button variant="ghost">Button</Button>
                  </Actions>
                </Stack>
              </Stack>
            </ContentBlock>
          </Box>,
        ),
    },
    {
      description: (
        <>
          <Text>
            <Strong>Anatomy</Strong>
          </Text>
          <List>
            <Text>
              Illustration (recommended): A static image that relates to the
              user&rsquo;s situation
            </Text>
            <Text>
              Heading: A short summary of the situation. Refer to the content
              guidelines below
            </Text>
            <Text>
              Text: Copy that informs the user why the data can&rsquo;t be
              displayed and/or what they might see when data becomes available
            </Text>
            <Text>
              Text link (optional): When appropriate, provide a link to further
              help or info
            </Text>
            <Text>
              Button (optional): When appropriate, provide actions for what to
              do next
            </Text>
            <Text>
              Bounding box (optional): If needed, apply a standard border with
              radius using <Strong>neutralLight</Strong>
            </Text>
          </List>
          <Text>
            Display the message on a neutral surface. Avoid heavy or saturated
            background colours. Centre alignment is the recommended default.
            Left alignment is recommended if the content includes a bulleted or
            numbered list.
          </Text>
        </>
      ),
      Example: ({ responsiveValue }) =>
        source(
          <Box background="surface" borderRadius="large" padding="gutter">
            <ContentBlock width="small">
              <Stack space={{ mobile: 'medium', desktop: 'large' }}>
                <Placeholder
                  shape="round"
                  width={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                  height={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                />
                <Stack space="medium">
                  <Heading level="2" weight="weak">
                    An example empty state
                  </Heading>
                  <Text tone="secondary">
                    This is a left aligned example with a short summary. You can
                    use a button or <TextLink href="#">a TextLink</TextLink> to
                    suit your needs.
                  </Text>
                  <List space="medium" tone="secondary">
                    <Text>List item one</Text>
                    <Text>List item two</Text>
                    <Text>List item three</Text>
                  </List>
                  <Inline space="none">
                    <Button variant="ghost">Button</Button>
                  </Inline>
                </Stack>
              </Stack>
            </ContentBlock>
          </Box>,
        ),
    },
    {
      description: (
        <Text>
          For left aligned empty states, the illustration can sit beside the
          copy to save vertical space when the content is lengthy. Left aligned
          illustrations still stack on mobile.
        </Text>
      ),
      Example: ({ responsiveValue }) =>
        source(
          <Box background="surface" borderRadius="large" padding="gutter">
            <ContentBlock width="small">
              <Columns
                space={{ mobile: 'medium', tablet: 'medium', desktop: 'large' }}
                collapseBelow="tablet"
                alignY="top"
              >
                <Column width="content">
                  <Placeholder
                    shape="round"
                    width={responsiveValue({
                      mobile: '96px',
                      tablet: '128px',
                      desktop: '192px',
                    })}
                    height={responsiveValue({
                      mobile: '96px',
                      tablet: '128px',
                      desktop: '192px',
                    })}
                  />
                </Column>
                <Column>
                  <Stack space="medium">
                    <Heading level="1" weight="weak">
                      An example empty state
                    </Heading>
                    <Text tone="secondary">
                      This is a left aligned example with a short summary. You
                      can use a button or{' '}
                      <TextLink href="#">a TextLink</TextLink> to suit your
                      needs.
                    </Text>
                    <List space="medium" tone="secondary">
                      <Text>List item one</Text>
                      <Text>List item two</Text>
                      <Text>List item three</Text>
                      <Text>List item four</Text>
                      <Text>List item five</Text>
                    </List>
                    <Inline space="none">
                      <Button variant="ghost">Button</Button>
                    </Inline>
                  </Stack>
                </Column>
              </Columns>
            </ContentBlock>
          </Box>,
        ),
    },
    {
      label: 'Small and in-line empty states',
      description: (
        <Text>
          For empty states that sit within content, such as a dashboard widget
          or tile. Consider using an{' '}
          <TextLink href="/components/Alert">Alert</TextLink> or{' '}
          <TextLink href="/components/Notice">Notice</TextLink> with the tone{' '}
          <Strong>info</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles columns={3} space="small">
            <Card height="full">
              <Stack space="large">
                <Heading level="4">Widget title</Heading>
                <Stack space="small">
                  <Text>
                    Widget content lorem ipsum dolor sit amet, consectetur
                    adipiscing elit amet.
                  </Text>
                </Stack>
              </Stack>
            </Card>
            <Card height="full">
              <Stack space="large">
                <Heading level="4">Widget title</Heading>
                <Stack space="small">
                  <Notice tone="info">
                    <Text>
                      We don&rsquo;t have any data for this yet. Please check
                      back later.
                    </Text>
                  </Notice>
                </Stack>
              </Stack>
            </Card>
            <Card height="full">
              <Stack space="large">
                <Heading level="4">Widget title</Heading>
                <Stack space="small">
                  <Text>
                    Widget content lorem ipsum dolor sit amet, consectetur
                    adipiscing elit amet.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Tiles>,
        ),
    },
    {
      description: (
        <Text>
          A Notice may work well on tiles or cards that have a visual bounding
          box. If greater visual prominence is required, an Alert can be used
          instead — but consider how this would look if multiple empty states
          appear at once.
        </Text>
      ),
    },
    {
      label: 'Content guidelines',
      description: (
        <>
          <Text>
            Empty states usually fall into one of four categories. The type
            determines the response.
          </Text>
          <List>
            <Text>
              <Strong>Negative</Strong> — the content doesn&rsquo;t exist and
              there&rsquo;s nothing for the user to do. Explain why, offer a
              workaround if there is one, and be clear about whether content is
              coming later.
            </Text>
            <Text>
              <Strong>Neutral</Strong> — the content doesn&rsquo;t exist and
              there&rsquo;s something for the user to do. Explain clearly what
              they need to do and include a CTA if appropriate.
            </Text>
            <Text>
              <Strong>Positive</Strong> — the user has cleared outstanding
              items. Acknowledge the work and celebrate in proportion to the
              effort.
            </Text>
            <Text>
              <Strong>Onboarding</Strong> — the user hasn&rsquo;t used the
              feature yet. Explain what the feature is, why it matters, and what
              they should do next.
            </Text>
          </List>
        </>
      ),
    },
    {
      label: 'When to use',
      description: (
        <List>
          <Text>
            No data yet — the user understands what will be available when data
            has been added
          </Text>
          <Text>
            No results when searching — the user understands how to adjust
            search criteria or filters
          </Text>
          <Text>
            First-time user — the user understands what actions they must take
            to populate data
          </Text>
        </List>
      ),
    },
    {
      label: 'Related patterns and components',
      description: (
        <List>
          <Text>
            <TextLink href="/patterns/error-states">Error states</TextLink> —
            For when the website or app fails to complete an expected action
          </Text>
          <Text>
            <TextLink href="/components/Alert">Alert</TextLink> — For in-flow
            messaging
          </Text>
          <Text>
            <TextLink href="/components/Notice">Notice</TextLink> — For lighter
            in-flow messaging
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
