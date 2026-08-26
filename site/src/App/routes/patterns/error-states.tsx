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
    <Text tone="secondary">
      An error state occurs when the website or app fails to complete an
      expected action. The error state is shown after the user has requested the
      action and alerts them that a problem has occurred. An error state may be
      large and take up most of the page, or it may be small and sit within
      other content.
    </Text>
  ),
  additional: [
    {
      label: 'Large and full-page error states',
      description: (
        <Text>
          For error states that take up most or all of the page, such as when a
          user is unauthorised.
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
                    How an error might look
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
          <List>
            <Text>
              Illustration (recommended): A static image that relates to the
              user&rsquo;s situation
            </Text>
            <Text>Heading: A short summary of the situation</Text>
            <Text>
              Text: Copy to instruct, explain, reassure or support the user
            </Text>
            <Text>
              Text link (optional): A link to further help or info when
              appropriate
            </Text>
            <Text>
              Button (optional): Actions for what to do next when appropriate
            </Text>
            <Text>
              Bounding box (optional): If needed, apply a standard border with
              radius using <Strong>neutralLight</Strong>
            </Text>
          </List>
          <Text>
            Consider framing the message on a neutral surface. Keep the main
            navigation and footer visible. Centre alignment is the recommended
            default; left alignment is recommended if the content includes a
            list.
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
                    How an error might look
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
          For left aligned error states, the illustration can sit beside the
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
                    <Heading level="2" weight="weak">
                      How an error might look
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
      label: 'Small and in-line error states',
      description: (
        <Text>
          For error states that sit within content, such as a dashboard widget.
          Consider using an <TextLink href="/components/Alert">Alert</TextLink>{' '}
          or <TextLink href="/components/Notice">Notice</TextLink> with the tone{' '}
          <Strong>critical</Strong>. If that feels too intense, the{' '}
          <Strong>info</Strong> tone can be used instead.
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
                  <Notice tone="critical">
                    <Text>
                      We can&rsquo;t load this data right now. Please check back
                      later.
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
      label: 'General guidelines',
      description: (
        <List>
          <Text>
            Be as specific as possible. This helps users resolve the issue.
            Don&rsquo;t try to address multiple error scenarios in one message.
          </Text>
          <Text>
            Project calm. Show the ideal state of something being fixed rather
            than something being broken. Avoid negative words such as error,
            oops, invalid, failed, problem and wrong.
          </Text>
          <Text>
            Don&rsquo;t blame the user. Make it about what we can&rsquo;t do,
            instead of what the user didn&rsquo;t do. Don&rsquo;t assume how
            they feel or trivialise the situation.
          </Text>
          <Text>
            More isn&rsquo;t always better. If the user needs to follow
            complicated instructions, break the process into steps. Generally
            avoid “please” and “sorry”.
          </Text>
        </List>
      ),
    },
    {
      label: 'Content guidelines',
      description: (
        <>
          <Text>
            Errors are pain points. Handling them with empathy helps users
            resolve issues faster and can turn a negative moment into a more
            lasting connection.
          </Text>
          <List>
            <Text>
              <Strong>Instruct</Strong> when the user can resolve it quickly.
              Tell them clearly what to do and don&rsquo;t make it a big deal.
            </Text>
            <Text>
              <Strong>Reassure</Strong> when they need to wait for SEEK.
              There&rsquo;s little they can do, so let them know we&rsquo;re
              working on it. Light humour can be appropriate.
            </Text>
            <Text>
              <Strong>Explain</Strong> when they can resolve it but it takes
              many steps. Break the process down and provide as much information
              as needed.
            </Text>
            <Text>
              <Strong>Support</Strong> when they can&rsquo;t complete a critical
              or time-sensitive task. Be helpful and calm. This is not the time
              to be playful.
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
            Permissions issues such as unauthorised or forbidden access
          </Text>
          <Text>
            Systems issues such as server errors, timeouts or scheduled
            maintenance
          </Text>
          <Text>Configuration required, such as an unsupported browser</Text>
          <Text>Not found, such as a missing page or bad request</Text>
        </List>
      ),
    },
    {
      label: 'Related patterns and components',
      description: (
        <List>
          <Text>
            <TextLink href="/patterns/empty-states">Empty states</TextLink> —
            For when there is no data available at the present time
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
